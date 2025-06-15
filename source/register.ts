type Racer = {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  pronouns: string;
  birthdate: string;
  region: string;
  fixed: boolean;
  race: "speed" | "stupor";
  category: "open" | "women" | "tgnc";
  finishTime?: string;
};

const successSwitch = (racerId: number) => {
  formElement.remove();
  $(`#thank-you`)!.classList.remove("hide");
  $(`#racer-id`)!.textContent = racerId + "";
};

const registerRacer = async (formData: Racer) => {
  const registerResponse = await api("2026/register-racer", "POST", formData);

  console.log(registerResponse);
  if (registerResponse.status === 200) {
    successSwitch(registerResponse.data.insertId);
  }
};

const formElement = $(`form`)! as HTMLFormElement;

const handleRegisterClick = (event: MouseEvent) => {
  event.preventDefault();

  const formData: Racer = {
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

  //   if (formElement.checkValidity()) {
  if (true) {
    const inputs = $$(`form :is(input, select)`) as NodeListOf<HTMLInputElement | HTMLSelectElement>;

    if (!inputs.length) return;

    inputs.forEach((input) => {
      const objectKey = input.getAttribute("id") as keyof Racer;

      switch (objectKey) {
        case "fixed": {
          formData[objectKey] = input.value === "true";
          break;
        }

        default: {
          (formData[objectKey] as string) = input.value.trim();
          break;
        }
      }
    });

    registerRacer(formData);
  } else {
    console.log("Not valid form");
  }
};

const registerButton = $(`#register`)! as HTMLButtonElement;
registerButton.addEventListener("click", handleRegisterClick);
