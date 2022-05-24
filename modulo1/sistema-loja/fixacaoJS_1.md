```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const comissao = valorTotalVendas * 0.05
 const numCarros = 100 * qtdeCarrosVendidos
 const salarioFixo = 2000
 const salarioMes = comissao + numCarros + salarioFixo
 
 return salarioMes

}
```
