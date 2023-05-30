import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";


const questoes: QuestaoModel[] = [
  new QuestaoModel(201, "Qual bicho produz a doença de chagas?", [
    RespostaModel.errada("Abelha") ,
    RespostaModel.errada("Barata"),
    RespostaModel.errada("Pulga"),
    RespostaModel.certa("Barbeiro")

  ]) ,
  new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
    RespostaModel.errada("Caju") ,
    RespostaModel.errada("Côco"),
    RespostaModel.errada("Chuchu"),
    RespostaModel.certa("Abóbora")

  ]) ,
  new QuestaoModel(203, "Qual é o coletivo de cães?", [
    RespostaModel.errada("Manada") ,
    RespostaModel.errada("Alcateia"),
    RespostaModel.errada("Rebanho"),
    RespostaModel.certa("Matilha")

  ]) ,
  new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
    RespostaModel.errada("Equilátero") ,
    RespostaModel.errada("Isóceles"),
    RespostaModel.errada("Trapézio"),
    RespostaModel.certa("Escaleno")

  ]) ,
  new QuestaoModel(205, 'O que significa o verbo em ingles "To smoke"', [
    RespostaModel.errada("Fugir") ,
    RespostaModel.errada("Ganhar"),
    RespostaModel.errada("Fingir"),
    RespostaModel.certa("Fumar")

  ]) ,
  new QuestaoModel(206, 'Quantos metro equivalem 2 quilômetros?', [
    RespostaModel.errada("200 Metro") ,
    RespostaModel.errada("20000 Metro"),
    RespostaModel.errada("20 Metro"),
    RespostaModel.certa("2000 Metro")

  ]) ,
  new QuestaoModel(207, "Abdicar é o mesmo que ?", [
    RespostaModel.errada("Lutar") ,
    RespostaModel.errada("Conseguir"),
    RespostaModel.errada("Abraçar"),
    RespostaModel.certa("Desistir")

  ]) ,
  new QuestaoModel(208, 'Qual o maior país do mundo em área?', [
    RespostaModel.errada("China") ,
    RespostaModel.errada("Estados Unidos"),
    RespostaModel.errada("Canadá"),
    RespostaModel.certa("Rússia")

  ]) ,
  new QuestaoModel(209, 'Qual alimento não é feito de farinha', [
    RespostaModel.errada("Pão") ,
    RespostaModel.errada("Macarrão"),
    RespostaModel.errada("Bolacha"),
    RespostaModel.certa("Feijão")

  ]) ,
  new QuestaoModel(210, 'Qual metal é liquido na temperatura ambiente?', [
    RespostaModel.errada("Ouro") ,
    RespostaModel.errada("Chumbo"),
    RespostaModel.errada("Cobre"),
    RespostaModel.certa("Mercúrio")

  ]) ,
  new QuestaoModel(211, "No corpo humano, em que sistema ocorre a produção de hormônios?", [
    RespostaModel.errada("Sistema Circulatório") ,
    RespostaModel.errada("Sistema Respiratório"),
    RespostaModel.errada("Sistema Digestório"),
    RespostaModel.certa("Sistema Endócrino")

  ]) ,
  new QuestaoModel(212, 'Qual recebe o remédio que é aplicado nos olhos?', [
    RespostaModel.errada("Água Oxigenada") ,
    RespostaModel.errada("Mertiolate"),
    RespostaModel.errada("Ácido"),
    RespostaModel.certa("Colírio")

  ]) ,
]

export default questoes