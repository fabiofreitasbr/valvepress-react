interface PropsHeaderTitle {
    title: string;
}

export default function HeaderTitle(props: PropsHeaderTitle) {
    return (
        <>
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4 ">
                    <h1 className="text-blue-900 text-center text-xl md:text-3xl uppercase font-medium">
                        {props.title}
                    </h1>
                </div>
            </div>
        </>
    );
}
