import Loader from "../../components/ux/Loader";
import LoaderHeader from "../../components/ux/LoaderHeader";

export default function Loading() {
    return (
        <>
            <LoaderHeader />
            <div className="flex items-center justify-center w-full h-full pt-10 text-white text-2xl">
                <Loader />
            </div>
        </>
    )
}