function Page({children}) {
    return (
        <div className="page bg-[#f5efe0] text-zinc-900 aspect-[3/4] w-full 
        max-w-md p-10 font-serif rounded-sm shadow-2xl flex flex-col max-h-[calc(100vh-8rem)]">
            {children}
        </div>
    )
}

export default Page