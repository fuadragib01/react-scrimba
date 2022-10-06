import Card from "./components/Card";
import Child from "./components/Child";
import RoundedImg from "./components/RoundedImg";

function App() {
    return (
        <div>
            <RoundedImg src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/79877/optimized_large_thumb_stage.jpg" />
            <Child />
            <Card cardColor="red" height={200} width={200}></Card>
            <Card cardColor="yellow" height={100} width={100}></Card>
            <Card cardColor="green" height={100} width={100}></Card>
        </div>
    );
}

export default App;
