import Card from "./components/Card";
import Child from "./components/Child";
import CTA from "./components/CTA";
import RoundedImg from "./components/RoundedImg";

function App() {
    return (
        <div>
            <CTA>
                <h1>This is an important CTA</h1>
                <button>Click me now or you will miss out!</button>
            </CTA>
            <CTA>
                <form>
                    <input type="text" />
                    <br />
                    <button>Submit</button>
                </form>
            </CTA>
            <RoundedImg src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/79877/optimized_large_thumb_stage.jpg" />
            <Child />
            <Card cardColor="red" height={200} width={200}></Card>
            <Card cardColor="yellow" height={100} width={100}></Card>
            <Card cardColor="green" height={100} width={100}></Card>
        </div>
    );
}

export default App;
