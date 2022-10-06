import Callout from "./components/Callout";
import "./App.css";

function App() {
    return (
        <main>
            <h1>Welcome!</h1>
            <Callout>
                <h2>Don't miss out</h2>
                <p>
                    Unless you suffer fromFOMO,you better make sure you fill out
                    the form below
                </p>
            </Callout>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mauris orci, posuere et lobortis tincidunt, semper sed purus.
                Aliquam ornare ante nec felis cursus pretium. Duis molestie nibh
                vitae odio lobortis sagittis. Sed mollis eros quis auctor
                lobortis. Nunc tempus nisl egestas gravida aliquam. Nulla purus
                diam, faucibus dapibus urna ut, dictum vehicula risus.
                Vestibulum faucibus at enim et congue. Ut dictum velit at elit
                tempor pellentesque.
            </p>
            <Callout>
                <img
                    src="https://nice-assets-2.s3-accelerate.amazonaws.com/smart_templates/8f1dddb5006eca3a6545dfb7db557778/assets/preview_57a04dff7d0c566c0a39d53365ae3107.jpg"
                    alt=""
                    width="100%"
                />
                <figcaption>lorem ipsum dollor ammet</figcaption>
            </Callout>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mauris orci, posuere et lobortis tincidunt, semper sed purus.
                Aliquam ornare ante nec felis cursus pretium. Duis molestie nibh
                vitae odio lobortis sagittis. Sed mollis eros quis auctor
                lobortis. Nunc tempus nisl egestas gravida aliquam. Nulla purus
                diam, faucibus dapibus urna ut, dictum vehicula risus.
                Vestibulum faucibus at enim et congue. Ut dictum velit at elit
                tempor pellentesque.
            </p>
            <Callout>
                <h2>This is a dummy title</h2>
                <input type="email" placeholder="Your email" />
                <br />
                <button>Subscribe</button>
            </Callout>
        </main>
    );
}

export default App;
