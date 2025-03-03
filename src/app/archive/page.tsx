import Link from "next/link";
import s from "./page.module.css";

export default function Archive() {
    return (
        <>
            <h1>Stupor Bowl Archive</h1>

            <p>Here you will find a list of Stupor Bowls of years past.</p>
            <ul className="">
                <li>Stupor Bowl 27</li>
                <li>Stupor Bowl 26</li>
                <li>Stupor Bowl 25</li>
                <li>Stupor Bowl 24</li>
                <li>Stupor Bowl 23</li>
                <li>Stupor Bowl 22</li>
                <li>Stupor Bowl 21</li>
                <li>Stupor Bowl 20</li>
                <li>Stupor Bowl 19</li>
                <li>Stupor Bowl 18</li>
                <li><Link href="./archive/17">Stupor Bowl 17</Link></li>
                <li>Stupor Bowl 16</li>
                <li>Stupor Bowl 15</li>
                <li>Stupor Bowl 14</li>
                <li>Stupor Bowl 13</li>
                <li>Stupor Bowl 12</li>
                <li>Stupor Bowl 11</li>
                <li>Stupor Bowl 10</li>
                <li>Stupor Bowl 9</li>
                <li>Stupor Bowl 8</li>
                <li>Stupor Bowl 7</li>
                <li>Stupor Bowl 6</li>
                <li>Stupor Bowl 5</li>
                <li>Stupor Bowl 4</li>
                <li>Stupor Bowl 3</li>
                <li>Stupor Bowl 2</li>
                <li>Stupor Bowl 1</li>
            </ul>
        </>
    );
}
