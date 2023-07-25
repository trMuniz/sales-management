import { Component, OnInit } from '@angular/core';
import { ImmunizationRecordService } from './immunization-record.service';

@Component({
  selector: 'app-immunization-record',
  templateUrl: './immunization-record.component.html',
  styleUrls: ['./immunization-record.component.css']
})
export class ImmunizationRecordComponent implements OnInit {

  users: User[] = [];
  immunizations: Immunizations[] = [];

  initColumns: any[] = [
    { name: 'nome_vacina', display: 'Nome' },
    { name: 'nome_tecnico', display: 'Terminologia' },
    { name: 'fabricante', display: 'Fabricante' },
    { name: 'dose', display: 'Dose' },
    { name: 'data_vacinacao', display: 'Data de Imunização' },
    { name: 'numero_lote', display: 'Lote' },
    { name: 'descricao', display: 'Descrição' }
  ];

  constructor(private recordsService: ImmunizationRecordService) { }

  ngOnInit(): void {
    this.recordsService.getRecords().then(records => {
      this.users = records;
      this.immunizations = records[0].immunizations;
    });
  }

  displayedColumns: any[] = this.initColumns.map(col => col.name);
}

interface User {
  id: number;
  name: string;
  birth: string;
  nationality: string;
  gender: string;
  nif: string;
  phone: string;
  email: string;
  address: string;
}


interface Immunizations {
  nome_vacina: string;
  nome_tecnico: string;
  fabricante: string;
  dose: string;
  data_vacinacao: string;
  numero_lote: string;
  descricao: string;
}
