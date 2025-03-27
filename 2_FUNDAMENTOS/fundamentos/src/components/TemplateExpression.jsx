

const TemplateExpression = () => {

    const name = "Jefferson";

    const data = {
        age: 31,
        job: "programador",
    }

    return (
        <div>
            <p>A soma é { 2+ 2}</p>
            <h3>Meu nome é { name }, tenho { data.age } anos e sou um { data.job }</h3>
        </div>
        
    )
}

export default TemplateExpression