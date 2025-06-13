import { formatarData} from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import { conta } from "../types/Conta.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

renderizarData
function renderizarData(): void {
  if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
  }
}

const DataComponent = {
  atualizarData: function() {
    renderizarData();    
  }
}

export default DataComponent;