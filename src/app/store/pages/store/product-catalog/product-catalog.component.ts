import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ssz-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss'
})
export class ProductCatalogComponent implements OnInit {
  files: TreeNode[] = [];
  selectedFiles: TreeNode | null = null;

  ngOnInit(): void {
    this.files =
      [
        {
          "label": "Carnicos",
          "children": [
            { "label": "Carnes de hamburguesa" },
            { "label": "Chorizos" },
            { "label": "Costillas" },
            { "label": "Jamones" },
            { "label": "Mortadelas" },
            { "label": "Salchichas" },
            { "label": "Salchichones" },
            { "label": "Tocinetas" }
          ]
        },
        {
          "label": "Panificación",
          "children": [
            { "label": "Pan hamburguesa" },
            { "label": "Pan perro" },
            { "label": "Tortillas" },
            { "label": "Linea dulce" },
            { "label": "Miga de pan" },
            { "label": "Pan tajado" },
            { "label": "Tostadas" },
            { "label": "Nachos" },
            { "label": "Tacos" }
          ]
        },
        {
          "label": "Salsas Y Aderezos",
          "children": [
            { "label": "Salsa tomate" },
            { "label": "Salsa rosada" },
            { "label": "Salsa tartara" },
            { "label": "Salsa bbq" },
            { "label": "Salsa chipotle" },
            { "label": "Salsa de chocolate" },
            { "label": "Salsa de ciruela" },
            { "label": "Salsa de mora" },
            { "label": "Salsa de piña" },
            { "label": "Salsa de queso" },
            { "label": "Salsa mexicana" },
            { "label": "Salsa negra" },
            { "label": "Salsa ranch" },
            { "label": "Salsas picantes" },
            { "label": "Sirope de miel" },
            { "label": "Sour cream" },
            { "label": "Soya" },
            { "label": "Tabasco" },
            { "label": "Teriyaki" },
            { "label": "Vinagres" },
            { "label": "Vinagreta" },
            { "label": "Pasta de tomate" },
            { "label": "Mundo showy" },
            { "label": "Mostaza" },
            { "label": "Mostacream" },
            { "label": "Miel mostaza" },
            { "label": "Mayonesa" },
            { "label": "Mayo-ajo" },
            { "label": "Guacamole" },
            { "label": "Dulce maíz" },
            { "label": "Crema leña" },
            { "label": "Aderezos" },
            { "label": "Mayonesa - maíz" },
            { "label": "Salsa napolitana" }
          ]
        },
        { "label": "Sazonadores", "children": [] },
        { "label": "Sistema Apanado", "children": [] },
        {
          "label": "Servilletas",
          "children": [
            { "label": "Dispensadores" },
            { "label": "Servilletas" }
          ]
        },
        {
          "label": "Aseo",
          "children": [
            { "label": "Antibacterial" },
            { "label": "Dispensadores" },
            { "label": "Gorros" },
            { "label": "Guantes" },
            { "label": "Jabones" },
            { "label": "Limpion industriual" },
            { "label": "Otros" },
            { "label": "Paños semidesechables" },
            { "label": "Papel higienico hogar" },
            { "label": "Papel higienico institucional" },
            { "label": "Toallas de manos" },
            { "label": "Paños humedos desinfectantes" },
            { "label": "Eliminador de olores" },
            { "label": "Tapabocas" }
          ]
        },
        {
          "label": "Empaques y Desechables",
          "children": [
            { "label": "Aluminio" },
            { "label": "Vasos" },
            { "label": "Cup salsero" },
            { "label": "Papel film / vinipel" },
            { "label": "Contenedores / bases" },
            { "label": "Cubiertos" },
            { "label": "Papel antigraso" },
            { "label": "Papel parafinado" },
            { "label": "Palillos" },
            { "label": "Pitillos" }
          ]
        },
        { "label": "Sales", "children": [] },
        { "label": "Lacteos", "children": [] },
        {
          "label": "Congelados",
          "children": [
            { "label": "Papa francesa" },
            { "label": "Papa en cascos" },
            { "label": "Papa criolla" },
            { "label": "Croqueta de yuca" },
            { "label": "Patacon" },
            { "label": "Maiz dulce" },
            { "label": "papa rizada" }
          ]
        },
        { "label": "Condimentos", "children": [] },
        { "label": "Aceites", "children": [] },
        { "label": "Enlatados", "children": [] },
        { "label": "Complementarios", "children": [] },
        { "label": "En conserva", "children": [] },
        { "label": "Productos Nuevos", "children": [] },
        { "label": "Promociones", "children": [] },
        { "label": "Ofertas", "children": [] },
        { "label": "Combos", "children": [] },
        { "label": "Queso", "children": [] },
        {
          "label": "Empacados",
          "children": [
            { "label": "Piña en trozos" },
            { "label": "Jalapeños" },
            { "label": "Pepinillos" },
            { "label": "Cerezas" }
          ]
        },
        { "label": "Empleados o punto de ventas", "children": [] },
        { "label": "Empleados o Punto de ventas", "children": [] },
        { "label": "Salsa Maiz dulce", "children": [] },
        { "label": "Salsa Burguer", "children": [] },
        { "label": "Aros de cebolla", "children": [] },
        { "label": "Salsa cheddar", "children": [] },
        { "label": "Esencia", "children": [] },
        { "label": "Colorantes", "children": [] },
        { "label": "Salsas innovadoras", "children": [] },
        { "label": "Mezcla para tortas", "children": [] }
      ]

  }
}
