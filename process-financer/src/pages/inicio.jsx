function Dashboard(saldo, receitas, despesas) {
    return (
        <div>
            <h1>Controle Financeiro</h1>

            <p>Saldo: R$ {saldo}</p>
            <p>Receitas: R$ {receitas}</p>
            <p>Despesas: R$ {despesas}</p>
        </div>
    );
}

export default Dashboard;