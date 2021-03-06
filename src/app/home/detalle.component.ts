import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentidadService } from '../services/services.index';
import { Objetivos } from '../interfaces/objetivos.interface';
import swal from 'sweetalert2';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html'
})

export class DetalleComponent implements OnInit {

	cargando = false;
	idSistema: number;
	sistema: string;
	alcance: string;
	mision: string;
	vision: string;
	objetivos: Objetivos[] = [];
	nota: string;

	constructor(private activatesRoute: ActivatedRoute, private router: Router, private _identidadService: IdentidadService) {
		this.activatesRoute.params.subscribe(params => {
			this.idSistema = params['id'];
		});
	}

	ngOnInit() {
		this.cargando = true;
		this.getSistema();
		this.getAlcance();
		this.getMision();
		this.getVision();
		this.getObjetivos();
		this.getNota();
	}

	getSistema() {
		this._identidadService.getSistemaById(this.idSistema)
			.subscribe(
				data => {
					// console.log(data);
					this.sistema = data;
				},
				error => {
					console.error(error);
					swal('ERROR', 'Error al cargar el Sistema', 'error');
					this.cargando = false;
				});
	}

	getAlcance() {
		this._identidadService.getIdentidad(this.idSistema, 'A')
			.subscribe(
				data => {
					// console.log(data);
					this.alcance = data;
				},
				error => {
					console.error(error);
					swal('ERROR', 'Error al cargar el Alcance', 'error');
					this.cargando = false;
				});
	}

	getMision() {
		this._identidadService.getIdentidad(this.idSistema, 'M')
			.subscribe(
				data => {
					// console.log(data);
					this.mision = data;
				},
				error => {
					console.error(error);
					swal('ERROR', 'Error al cargar la Misión', 'error');
					this.cargando = false;
				});
	}

	getVision() {
		this._identidadService.getIdentidad(this.idSistema, 'V')
			.subscribe(
				data => {
					// console.log(data);
					this.vision = data;
				},
				error => {
					console.error(error);
					swal('ERROR', 'Error al cargar la Visión', 'error');
					this.cargando = false;
				});
	}

	getNota() {
		this._identidadService.getIdentidad(1, 'N')
			.subscribe(
				data => {
					// console.log(data);
					this.nota = data;
				},
				error => {
					console.error(error);
					swal('ERROR', 'Error al cargar la Nota', 'error');
					this.cargando = false;
				});
	}

	getObjetivos() {
		this._identidadService.getObjetivos(this.idSistema)
			.subscribe(
				data => {
					this.objetivos = data;
				},
				error => {
					console.error(error);
					swal('ERROR', 'Error al cargar los Objetivos', 'error');
					this.cargando = false;
				});
	}

}
