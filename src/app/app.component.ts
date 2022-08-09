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
              {
                key: 'razonSocial',
                type: 'input',
                className: 'col-md-6',
                templateOptions: {
                  label: 'Nombre o Razón Social',
                  required: true,
                  appearance: 'outline',
                },
              },
              {
                key: 'nombreFantasia',
                type: 'input',
                className: 'col-md-6',
                templateOptions: {
                  label: 'Nombre de Fantasia',
                  appearance: 'outline',
                  enableWorkCount: true,
                },
              },
            ],
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'condicionFiscalId',
                type: 'select',
                className: 'col-md-6',
                templateOptions: {
                  label: 'Condición Fiscal frente al IVA',
                  appearance: 'outline',
                },
              },
              {
                key: 'cuitid',
                type: 'input',
                className: 'col-md-3',
                templateOptions: {
                  label: 'DNI/CUIT',
                  type: 'number',
                  minLength: 7,
                  maxLength: 11,
                  appearance: 'outline',
                  enableWorkCount: true,
                },
              },
            ],
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-md-6',
                type: 'checkbox',
                key: 'otherToo',
                templateOptions: {
                  label: 'Facturar MiPyme',
                },
              },
            ],
          },
          {
            type: 'tabset',
            fieldGroup: [
              {
                templateOptions: {
                  tabTitle: 'Info Comercial',
                },
                fieldGroupClassName: 'row',
                fieldGroup: [
                  {
                    key: 'direccion',
                    type: 'input',
                    className: 'col-md-5',
                    templateOptions: {
                      label: 'Dirección',
                      required: false,
                      appearance: 'outline',
                    },
                  },
                  {
                    key: 'codigoPostal',
                    type: 'input',
                    className: 'col-md-1',
                    templateOptions: {
                      label: 'C.P.',
                      required: false,
                      appearance: 'outline',
                    },
                  },
                  {
                    key: 'localidad',
                    type: 'input',
                    className: 'col-md-3',
                    templateOptions: {
                      label: 'Localidad',
                      required: false,
                      appearance: 'outline',
                    },
                  },
                  {
                    key: 'provincia',
                    type: 'input',
                    className: 'col-md-3',
                    templateOptions: {
                      label: 'Provincia',
                      required: false,
                      appearance: 'outline',
                    },
                  },
                  { fieldGroupClassName: 'row' },
                  {
                    key: 'mail',
                    type: 'input',
                    className: 'col-md-5',
                    templateOptions: {
                      label: 'e-mail',
                      required: false,
                      type: 'mail',
                      appearance: 'outline',
                    },
                  },
                  {
                    key: 'telefono',
                    type: 'input',
                    className: 'col-md-3',
                    templateOptions: {
                      label: 'Teléfono',
                      translate: true,
                      required: false,
                      maxLength: 120,
                      appearance: 'outline',
                    },
                  },
                  {
                    key: 'otros',
                    type: 'textarea',
                    className: 'col-md-4',
                    templateOptions: {
                      label: 'Otros',
                      translate: true,
                      placeholder: 'Comentarios adicionales',
                      required: false,
                      appearance: 'outline',
                    },
                  },
                ],
              },
              {
                templateOptions: {
                  tabTitle: 'Entregas',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
                fieldGroup: [
                  {
                    key: 'direccionEntrega',
                    type: 'input',
                    templateOptions: {
                      label: 'Dirección de Entrega',
                      required: false,
                      appearance: 'outline',
                    },
                  },
                ],
              },
              {
                templateOptions: {
                  tabTitle: 'Contactos',
                },
                expressionProperties: {
                  'templateOptions.tabDisabled': 'false',
                  'templateOptions.tabHidden': 'false',
                },
                fieldGroup: [
                  {
                    key: 'detalles',
                    type: 'arrayRepeat',
                    templateOptions: {
                      addText: 'Contactos',
                    },
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      fieldGroup: [
                        {
                          type: 'input',
                          className: 'col col-lg-3',
                          key: 'nombre',
                          templateOptions: {
                            label: 'Nombre',
                            required: true,
                          },
                        },
                        {
                          type: 'input',
                          className: 'col col-lg-3',
                          key: 'email',
                          templateOptions: {
                            label: 'e-mail',
                            type:'email'
                          },
                        },
                        {
                          type: 'input',
                          className: 'col col-lg-2',
                          key: 'telefono',
                          templateOptions: {
                            label: 'Teléfono',
                          },
                        },
                        {
                          type: 'input',
                          className: 'col col-lg-4',
                          key: 'direccion',
                          templateOptions: {
                            label: 'Dirección',
                          },
                        },
                      ],
                    },
                  },
                ],
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
