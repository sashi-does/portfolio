import Button from "./Button";
import { InputBar } from "./InputBar";

export default function NewsLetter() {

    // grab from atomix,spectrum
    return <div>
        <h1>Subscribe to Sashi's Newsletter</h1>
        <p>I occasionally write about tech and business and share thoughts on the intersection of Real world problem and AI</p>
        <div className="flex items-center gap-x-2">
            <InputBar />
            <Button />
        </div>
    </div>
}