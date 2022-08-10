import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  model = { email: 'email@gmail.com' };
  configItemsBD = {
    tabs: [
      {
        label: 'Info Fiscal',
        disabled: false,
        fields: [
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              //Solo en comprobantes venta y venta en negro
              // {
              //   key: 'consumidorFinal',
              //   type: 'checkbox',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Consumidor Final',
              //   },
              // },
              {
                key: 'razonSocial',
                type: 'input',
                className: 'col col-lg-4',
                templateOptions: {
                  label: 'Nombre o Razón Social',
                  // required: true,
                },
                expressionProperties: {
                  'templateOptions.disabled': 'model.consumidorFinal',
                },
              },
              {
                key: 'cuit',
                type: 'input',
                className: 'col col-lg-2',
                templateOptions: {
                  label: 'DNI/CUIT',
                  type: 'number',
                  minLength: 7,
                  maxLength: 11,
                  enableWorkCount: true,
                }
              },
            ]
          },
          { template: '<hr />' },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'cbteTipoId',
                type: 'select',
                className: 'col col-lg-4',
                templateOptions: {
                  label: 'Tipo de Comprobante',
                  required: true,
                  options: [
                    {label: 'FACTURA A', value: '1'},
                    {label: 'NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) A', value: '202'},
                    {label: 'NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) A', value: '203'}
                  ]
                },
              },
              //solo en cbtes venta debido o credito mipyme
              // {
              //   key: 'anulaCbteAsociado',
              //   type: 'checkbox',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Anula comprobante asociado',
              //   },
              //   expressionProperties: {
              //     hideExpression: 'model.cbteTipoId === "1"',
              //   },
              // },
              //solo habilitar para comprobantes venta
              // {
              //   key: 'puntoVenta',
              //   type: 'select',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Punto de Venta',
              //     required: true,
              //   },
              // },
              //solo habilitar para comprobantes compra
              // {
              //   key: 'puntoVenta',
              //   type: 'input',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Punto de Venta',
              //     required: true,
              //   },
              // },
              {
                key: 'nroComprobante',
                type: 'input',
                className: 'col col-lg-2',
                templateOptions: {
                  label: 'N° comprobante',
                  required: true,
                },
              },
              {
                key: 'fechaCbte',
                type: 'input',
                className: 'col col-lg-2',
                templateOptions: {
                  label: 'Fecha',
                  type: 'date',
                  required: true,
                },
              },
            ],
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [      
              //solo para comprobantes       
              // {
              //   key: 'monedaId',
              //   type: 'select',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Moneda',
              //     required: true,
              //     options: [
              //       { label: 'PESO ARG', value: 'PES' },
              //       { label: 'DOLAR', value: 'DOL' },
              //     ],
              //   },
              // },
              // {
              //   key: 'cotizacion',
              //   type: 'input',
              //   className: 'col col-lg-1',
              //   defaultValue: 1,
              //   expressionProperties: {
              //     'templateOptions.disabled': 'model.monedaId === "PES"',
              //   },
              //   templateOptions: {
              //     label: 'Cotización',
              //     type: 'number',
              //     required: true,
              //     placeholder: '',
              //   },      
              //   hideExpression: 'model.monedaId === "PES"',
              // },
              {
                key: 'condicionVentaid',
                type: 'select',
                className: 'col col-lg-3',
                templateOptions: {
                  label: 'Condiciones de Venta',
                  options: [
                    { label: 'CONTADO', value: '1' },
                    { label: 'CTA CTE', value: '2' },
                  ]
                },
              },
              {
                key: 'observaciones',
                type: 'textarea',
                className: 'col col-lg-6',
                templateOptions: {
                  label: 'Observaciones',
                  required: false,
                  placeholder:'Información adicional a mostrar en el comprobante'
                },
              },
            ],
          },
          { template: '<hr />' },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              // solo en comprobantes, y mandatorio en ventas de acuerdo al valor de concepto
              // {
              //   key: 'conceptoId',
              //   type: 'select',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Concepto',
              //     required: TextTrackCue,
              //     options: [
              //       { label: 'PRODUCTOS', value: '1' },
              //       { label: 'SERVICIOS', value: '2' },
              //       { label: 'PRODUCTOS Y SERVICIOS', value: '3' },
              //     ]
              //   },
              // },
              // solo en comprobantes, y mandatorio en ventas de acuerdo al valor de concepto
              // {
              //   key: 'fechaDesde',
              //   type: 'input',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Serv. Desde',
              //     type: 'date',
              //     required: true,
              //   },
              //   expressionProperties: {
              //     'templateOptions.disabled': 'model.conceptoId === "1"',
              //   },
              // },
              // {
              //   key: 'fechaHasta',
              //   type: 'input',
              //   className: 'col col-lg-2',
              //   templateOptions: {
              //     label: 'Serv. Hasta',
              //     type: 'date',
              //     required: true,
              //   },
              //   expressionProperties: {
              //     'templateOptions.disabled': 'model.conceptoId === "1"',
              //   },
              // },
              //solo en los de venta
              // {
              //   key: 'listaPrecioId',
              //   type: 'select',
              //   className: 'col col-lg-4',
              //   templateOptions: {
              //     label: 'Lista de Precios',
              //     required: true,
              //   },
              // },
              {
                key: 'descuento',
                type: 'input',
                className: 'col col-lg-1',
                templateOptions: {
                  label: 'Descuento',
                  required: false,
                },
              },
            ],
          },
          { template: '<hr />' },
          {
            type: 'tabset',
            fieldGroup: [
              {
                templateOptions: {
                  tabTitle: 'Items',
                },
                fieldGroup: [
                  {
                    key: 'detalles',
                    type: 'arrayRepeat',
                    templateOptions: {
                      addText: 'Item',
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          key: 'nombre',
                          type: 'input',
                          className: 'col col-lg-3', 
                          templateOptions: {
                            label: 'Item',
                            required: true,
                          },
                        },
                        {
                          key: 'descripcion',
                          type: 'input',
                          className: 'col col-lg-3', 
                          templateOptions: {
                            label: 'Descripción',
                          },
                        },
                        {
                          key: 'cantidad',
                          type: 'input',
                          className: 'col col-lg-1',
                          templateOptions: {
                            label: 'Cantidad',
                            type:'number',
                            required: true,
                          },
                        },
                        {
                          key: 'precio',
                          type: 'input',
                          className: 'col col-lg-1',                       
                          templateOptions: {
                            label: 'Precio',
                            type:'number',
                            required: true,
                          },
                        },
                        {
                          key: 'iva',
                          type: 'input',
                          className: 'col col-lg-1',                       
                          templateOptions: {
                            label: 'IVA',
                            type:'number',
                            required: true,
                          },
                        },
                        {
                          key: 'descuento',
                          type: 'input',
                          className: 'col col-lg-1',                       
                          templateOptions: {
                            label: 'Descuento',
                            type:'number',
                            required: true,
                          },
                        },
                        {
                          key: 'subtotal',
                          type: 'input',
                          className: 'col col-lg-1',                       
                          templateOptions: {
                            label: 'Subtotal',
                            type:'number',
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                ],
                // fieldGroupClassName: 'row',
                // fieldGroup: [
                //   {
                //     key: 'direccion',
                //     type: 'input',
                //     className: 'col-md-5',
                //     templateOptions: {
                //       label: 'Dirección',
                //       required: false,
                //       appearance: 'outline',
                //     },
                //   },
                //   {
                //     key: 'codigoPostal',
                //     type: 'input',
                //     className: 'col-md-1',
                //     templateOptions: {
                //       label: 'C.P.',
                //       required: false,
                //       appearance: 'outline',
                //     },
                //   },
                //   {
                //     key: 'localidad',
                //     type: 'input',
                //     className: 'col-md-3',
                //     templateOptions: {
                //       label: 'Localidad',
                //       required: false,
                //       appearance: 'outline',
                //     },
                //   },
                //   {
                //     key: 'provincia',
                //     type: 'input',
                //     className: 'col-md-3',
                //     templateOptions: {
                //       label: 'Provincia',
                //       required: false,
                //       appearance: 'outline',
                //     },
                //   },
                //   { fieldGroupClassName: 'row' },
                //   {
                //     key: 'mail',
                //     type: 'input',
                //     className: 'col-md-5',
                //     templateOptions: {
                //       label: 'e-mail',
                //       required: false,
                //       type: 'mail',
                //       appearance: 'outline',
                //     },
                //   },
                //   {
                //     key: 'telefono',
                //     type: 'input',
                //     className: 'col-md-3',
                //     templateOptions: {
                //       label: 'Teléfono',
                //       translate: true,
                //       required: false,
                //       maxLength: 120,
                //       appearance: 'outline',
                //     },
                //   },
                //   {
                //     key: 'otros',
                //     type: 'textarea',
                //     className: 'col-md-4',
                //     templateOptions: {
                //       label: 'Otros',
                //       translate: true,
                //       placeholder: 'Comentarios adicionales',
                //       required: false,
                //       appearance: 'outline',
                //     },
                //   },
                // ],
              },
              {
                templateOptions: {
                  tabTitle: 'Medios de Pago',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
                fieldGroup: [
                  
                ],
              },
              {
                templateOptions: {
                  tabTitle: 'Remitos',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
   
              },
              {
                templateOptions: {
                  tabTitle: 'Pagos',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
   
              },
            ],
          },
        ],
      },
    ],
  };
  form = new FormArray(this.configItemsBD.tabs.map(() => new FormGroup({})));
  options = this.configItemsBD.tabs.map(() => ({}));

  submit(model) {
    console.log(model);
  }
}
