function Hero({name, pet})
{
    return (
        <div className="hero mt-16">
            <h1 className="text-5xl front-bold text-center">{name}</h1>
            <p className="text-center text-zinc-600 mt-2">Computer Science SSU '27</p>
        </div>
    )
}

export default Hero