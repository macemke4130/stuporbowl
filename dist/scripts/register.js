"use strict";
const formElement = $(`form`);
const allInputs = $$(`:is(input, select)`);
const successSwitch = (racerId) => {
    $(`#form-columns`).remove();
    $(`#thank-you`).classList.remove("hide");
    $(`#racer-id`).textContent = racerId + "";
};
const registerRacer = async (formData) => {
    console.log(formData);
    const registerResponse = await api("2026/register-racer", "POST", formData);
    console.log(registerResponse);
    if (registerResponse.status === 200) {
        successSwitch(registerResponse.data.insertId);
    }
};
const handleRegisterClick = (event) => {
    event.preventDefault();
    const formData = {
        email: "",
        firstName: "",
        lastName: "",
        pronouns: "",
        birthdate: "",
        region: "",
        fixed: false,
        race: "speed",
        category: "open",
    };
    if (formElement.checkValidity()) {
        const inputs = $$(`form :is(input, select):not(.front-end-only)`);
        inputs.forEach((input) => {
            const objectKey = input.getAttribute("id");
            switch (objectKey) {
                case "fixed": {
                    formData[objectKey] = input.value === "true";
                    break;
                }
                case "region": {
                    formData[objectKey] = input.value || "Twin Cities";
                    break;
                }
                default: {
                    formData[objectKey] = input.value.trim();
                    break;
                }
            }
        });
        registerRacer(formData);
    }
    else {
        validateForm();
    }
};
const flagInput = (input) => {
    input.classList.add("not-valid");
};
const validateForm = () => {
    [...allInputs].toReversed().forEach((input) => {
        const validity = input.validity;
        if (validity.valid === false) {
            flagInput(input);
            input.focus();
        }
    });
};
const handleInputChange = (event) => {
    const target = event.target;
    if (target.validity) {
        target.classList.remove("not-valid");
    }
    // Handle class removal for all radio options when selecting one.
    if (target.getAttribute("type") === "radio") {
        const inputName = target.getAttribute("name");
        const allRadioOptions = $$(`[name="${inputName}"]`);
        allRadioOptions.forEach((radio) => {
            radio.classList.remove("not-valid");
        });
    }
};
const handleLocalRadioSelect = (event) => {
    const target = event.target;
    const local = target.value === "true";
    if (local) {
        $(`label:has(#region)`).classList.add("hide");
        $(`#region`).removeAttribute("required");
    }
    else {
        $(`label:has(#region)`).classList.remove("hide");
        $(`#region`).setAttribute("required", "");
    }
};
const registerButton = $(`#register`);
registerButton.addEventListener("click", handleRegisterClick);
allInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
    if (input.getAttribute("name") === "local") {
        input.addEventListener("input", handleLocalRadioSelect);
    }
});
