import Center from "../components/Center.jsx";
import Logo from "../components/Logo.jsx";
import Introduction from "../components/home/Introduction.jsx";
import PageToggle from "../components/toggle/PageToggle.jsx";

export default function Landing() {
    return (
        <div className="h-screen w-screen bg-white">
            <div className="py-4">
                <Center>
                    <Logo />
                </Center>

                <div className="mt-16">
                    <Center>
                        <div className=" w-[600px]">
                            <Introduction/>
                            <PageToggle />
                        </div>
                    </Center>
                </div>
            </div>
        </div>
    );
}