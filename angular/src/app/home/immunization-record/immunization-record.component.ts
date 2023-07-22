import { Component } from '@angular/core';

@Component({
  selector: 'app-immunization-record',
  templateUrl: './immunization-record.component.html',
  styleUrls: ['./immunization-record.component.css']
})
export class ImmunizationRecordComponent {
  displayedColumns: string[] = ['nome_vacina', 'nome_tecnico', 'fabricante', 'dose', 'data_vacinacao', 'numero_lote', 'descricao'];
  dataSource = ELEMENT_DATA;
}

export interface Immunizations {
  nome_vacina: string;
  nome_tecnico: string;
  fabricante: string;
  dose: string;
  data_vacinacao: string;
  numero_lote: string;
  descricao: string;
}

const ELEMENT_DATA: Immunizations[] = [
  {
    "nome_vacina": "BCG",
    "nome_tecnico": "Vacina BCG",
    "fabricante": "Serum Institute of India",
    "dose": "1ª dose",
    "data_vacinacao": "1993-03-20",
    "numero_lote": "BCG123456",
    "descricao": "Vacina contra tuberculose."
  },
  {
    "nome_vacina": "Hepatite B",
    "nome_tecnico": "Vacina Hepatite B",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "1993-08-30",
    "numero_lote": "HB123456",
    "descricao": "Vacina contra hepatite B."
  },
  {
    "nome_vacina": "Poliomielite",
    "nome_tecnico": "Vacina Poliomielite",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "1993-09-10",
    "numero_lote": "PV123456",
    "descricao": "Vacina contra poliomielite."
  },
  {
    "nome_vacina": "Tríplice Viral (MMR)",
    "nome_tecnico": "Vacina Tríplice Viral (MMR)",
    "fabricante": "Merck & Co.",
    "dose": "1ª dose",
    "data_vacinacao": "1995-09-20",
    "numero_lote": "MMR123456",
    "descricao": "Vacina contra sarampo, caxumba e rubéola."
  },
  {
    "nome_vacina": "DTP",
    "nome_tecnico": "Vacina Tríplice Bacteriana (DTP)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "1995-09-30",
    "numero_lote": "DTP123456",
    "descricao": "Vacina contra difteria, tétano e coqueluche."
  },
  {
    "nome_vacina": "Haemophilus influenzae type B",
    "nome_tecnico": "Vacina Haemophilus influenzae tipo B",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "1995-10-10",
    "numero_lote": "HIB123456",
    "descricao": "Vacina contra Haemophilus influenzae tipo B."
  },
  {
    "nome_vacina": "Poliomielite",
    "nome_tecnico": "Vacina Poliomielite",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "2ª dose",
    "data_vacinacao": "1995-10-30",
    "numero_lote": "PV654321",
    "descricao": "Vacina contra poliomielite."
  },
  {
    "nome_vacina": "DTP",
    "nome_tecnico": "Vacina Tríplice Bacteriana (DTP)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "2ª dose",
    "data_vacinacao": "1995-11-10",
    "numero_lote": "DTP654321",
    "descricao": "Vacina contra difteria, tétano e coqueluche."
  },
  {
    "nome_vacina": "Haemophilus influenzae type B",
    "nome_tecnico": "Vacina Haemophilus influenzae tipo B",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "2ª dose",
    "data_vacinacao": "1995-11-25",
    "numero_lote": "HIB654321",
    "descricao": "Vacina contra Haemophilus influenzae tipo B."
  },
  {
    "nome_vacina": "Poliomielite",
    "nome_tecnico": "Vacina Poliomielite",
    "fabricante": "Butantan",
    "dose": "1ª dose",
    "data_vacinacao": "1996-01-10",
    "numero_lote": "PV987654",
    "descricao": "Vacina contra poliomielite."
  },
  {
    "nome_vacina": "Hepatite B",
    "nome_tecnico": "Vacina Hepatite B",
    "fabricante": "Butantan",
    "dose": "2ª dose",
    "data_vacinacao": "1996-02-15",
    "numero_lote": "HB987654",
    "descricao": "Vacina contra hepatite B."
  },
  {
    "nome_vacina": "Haemophilus influenzae type B",
    "nome_tecnico": "Vacina Haemophilus influenzae tipo B",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "3ª dose",
    "data_vacinacao": "1996-03-20",
    "numero_lote": "HIB789012",
    "descricao": "Vacina contra Haemophilus influenzae tipo B."
  },
  {
    "nome_vacina": "DTP",
    "nome_tecnico": "Vacina Tríplice Bacteriana (DTP)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "3ª dose",
    "data_vacinacao": "1996-04-25",
    "numero_lote": "DTP789012",
    "descricao": "Vacina contra difteria, tétano e coqueluche."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2000-06-15",
    "numero_lote": "INF001",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Tríplice Viral (MMR)",
    "nome_tecnico": "Vacina Tríplice Viral (MMR)",
    "fabricante": "Merck & Co.",
    "dose": "2ª dose",
    "data_vacinacao": "2001-04-10",
    "numero_lote": "MMR345678",
    "descricao": "Vacina contra sarampo, caxumba e rubéola."
  },
  {
    "nome_vacina": "DTP",
    "nome_tecnico": "Vacina Tríplice Bacteriana (DTP)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "4ª dose",
    "data_vacinacao": "2002-07-12",
    "numero_lote": "DTP234567",
    "descricao": "Vacina contra difteria, tétano e coqueluche."
  },
  {
    "nome_vacina": "Poliomielite",
    "nome_tecnico": "Vacina Poliomielite",
    "fabricante": "Butantan",
    "dose": "Ref Dose",
    "data_vacinacao": "2003-09-08",
    "numero_lote": "PV543210",
    "descricao": "Vacina contra poliomielite (dose de reforço)."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2003-06-20",
    "numero_lote": "INF002",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Tríplice Viral (MMR)",
    "nome_tecnico": "Vacina Tríplice Viral (MMR)",
    "fabricante": "Merck & Co.",
    "dose": "3ª dose",
    "data_vacinacao": "2004-09-30",
    "numero_lote": "MMR678901",
    "descricao": "Vacina contra sarampo, caxumba e rubéola."
  },
  {
    "nome_vacina": "DTP",
    "nome_tecnico": "Vacina Tríplice Bacteriana (DTP)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "5ª dose",
    "data_vacinacao": "2005-12-05",
    "numero_lote": "DTP987654",
    "descricao": "Vacina contra difteria, tétano e coqueluche."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2006-07-15",
    "numero_lote": "INF003",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Tríplice Viral (MMR)",
    "nome_tecnico": "Vacina Tríplice Viral (MMR)",
    "fabricante": "Merck & Co.",
    "dose": "4ª dose",
    "data_vacinacao": "2007-08-25",
    "numero_lote": "MMR789012",
    "descricao": "Vacina contra sarampo, caxumba e rubéola."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2007-06-30",
    "numero_lote": "INF004",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "nome_tecnico": "Vacina Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "2008-09-12",
    "numero_lote": "DTpa001",
    "descricao": "Vacina contra difteria, tétano e coqueluche para adultos."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2008-06-25",
    "numero_lote": "INF005",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "nome_tecnico": "Vacina Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "2ª dose",
    "data_vacinacao": "2010-02-20",
    "numero_lote": "DTpa002",
    "descricao": "Vacina contra difteria, tétano e coqueluche para adultos."
  },
  {
    "nome_vacina": "Pneumocócica Conjugada",
    "nome_tecnico": "Vacina Pneumocócica Conjugada",
    "fabricante": "Pfizer",
    "dose": "1ª dose",
    "data_vacinacao": "2011-04-15",
    "numero_lote": "PNEU001",
    "descricao": "Vacina contra pneumococo."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2011-06-15",
    "numero_lote": "INF006",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "nome_tecnico": "Vacina Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "Ref Dose",
    "data_vacinacao": "2012-03-08",
    "numero_lote": "DTpa003",
    "descricao": "Vacina contra difteria, tétano e coqueluche para adultos (dose de reforço)."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2012-08-10",
    "numero_lote": "INF007",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Hepatite A",
    "nome_tecnico": "Vacina Hepatite A",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "2013-09-20",
    "numero_lote": "HA001",
    "descricao": "Vacina contra hepatite A."
  },
  {
    "nome_vacina": "Pneumocócica Conjugada",
    "nome_tecnico": "Vacina Pneumocócica Conjugada",
    "fabricante": "Pfizer",
    "dose": "2ª dose",
    "data_vacinacao": "2014-04-18",
    "numero_lote": "PNEU002",
    "descricao": "Vacina contra pneumococo."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2014-06-15",
    "numero_lote": "INF008",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "Hepatite A",
    "nome_tecnico": "Vacina Hepatite A",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "2ª dose",
    "data_vacinacao": "2015-02-12",
    "numero_lote": "HA002",
    "descricao": "Vacina contra hepatite A."
  },
  {
    "nome_vacina": "Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "nome_tecnico": "Vacina Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "3ª dose",
    "data_vacinacao": "2016-07-25",
    "numero_lote": "DTpa004",
    "descricao": "Vacina contra difteria, tétano e coqueluche para adultos."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2016-08-20",
    "numero_lote": "INF009",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "HPV",
    "nome_tecnico": "Vacina HPV",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "1ª dose",
    "data_vacinacao": "2017-03-18",
    "numero_lote": "HPV001",
    "descricao": "Vacina contra papilomavírus humano (HPV)."
  },
  {
    "nome_vacina": "Pneumocócica Conjugada",
    "nome_tecnico": "Vacina Pneumocócica Conjugada",
    "fabricante": "Pfizer",
    "dose": "3ª dose",
    "data_vacinacao": "2018-06-10",
    "numero_lote": "PNEU003",
    "descricao": "Vacina contra pneumococo."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2018-07-15",
    "numero_lote": "INF010",
    "descricao": "Vacina contra Influenza (gripe)."
  },
  {
    "nome_vacina": "HPV",
    "nome_tecnico": "Vacina HPV",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "2ª dose",
    "data_vacinacao": "2019-01-12",
    "numero_lote": "HPV002",
    "descricao": "Vacina contra papilomavírus humano (HPV)."
  },
  {
    "nome_vacina": "Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "nome_tecnico": "Vacina Tríplice Bacteriana Acelular do Adulto (dTpa)",
    "fabricante": "GSK (GlaxoSmithKline)",
    "dose": "Ref Dose",
    "data_vacinacao": "2019-05-18",
    "numero_lote": "DTpa005",
    "descricao": "Vacina contra difteria, tétano e coqueluche para adultos (dose de reforço)."
  },
  {
    "nome_vacina": "Pneumocócica Conjugada",
    "nome_tecnico": "Vacina Pneumocócica Conjugada",
    "fabricante": "Pfizer",
    "dose": "Ref Dose",
    "data_vacinacao": "2020-09-20",
    "numero_lote": "PNEU004",
    "descricao": "Vacina contra pneumococo (dose de reforço)."
  },
  {
    "nome_vacina": "Influenza",
    "nome_tecnico": "Vacina Influenza",
    "fabricante": "MedImmune",
    "dose": "Anual",
    "data_vacinacao": "2020-06-25",
    "numero_lote": "INF011",
    "descricao": "Vacina contra Influenza (gripe)."
  }
];
