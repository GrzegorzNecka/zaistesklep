//rafce

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";

const AboutPage = () => {
    return (
        <div>
            <Header />

            <Main>
                <div className="bg-white w-full p-16">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 pb-5">o nas</h2>
                    <article>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae explicabo eum. Omnis
                        quibusdam dolorem quis eos itaque corrupti repudiandae. Voluptate eum, pariatur corporis nobis
                        nisi aliquid at maxime id?
                    </article>
                </div>
            </Main>

            <Footer />
        </div>
    );
};

export default AboutPage;
