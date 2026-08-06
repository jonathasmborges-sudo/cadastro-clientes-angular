export function formatarCPF(cpf: string): string {
  if (!cpf) return '';
  const apenasNumeros = cpf.replace(/\D/g, '');
  return apenasNumeros
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .substring(0, 14);
}

export function formatarDataBR(dataIso: string): string {
  if (!dataIso) return '';
  const [ano, mes, dia] = dataIso.split('-');
  if (!ano || !mes || !dia) return dataIso;
  return `${dia}/${mes}/${ano}`;
}