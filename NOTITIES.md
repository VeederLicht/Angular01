# Tips en notities voor Angular cusrus

## Algemeen

Goede extenties: Angular Language Service

## 2.39

Custom types definieren zoals objects. Inline, met type of met interface.
Gebruikelijk om deze met hoofdletters te beginnen.

## 2.42

Geen ngfor meer gebruiken maar de nieuwe control flow syntax [ @for ]

## 2.47

Datamodels (types en interfaces) centraal definieren in plaats van lokaal in de componenten.
Gebruikelijk in de map waar de type wordt gebruikt, met de naam component.model.ts.
Om een geldige module te zijn moeten de keywords type of interface met export worden geprefixt.
Dan importeren met
`import { type ... } from './....module';`

## 2.48

Dynamic CSS met property binding, bijvoorbeeld [class.active]="isSelected". Om voorwaardelijke stijlen toe te passen.

## 2.52

**ngModel** is speciaal voor gebruik in forms, om de input te synchroniseren met de datamodel. Om deze te kunnen gebruiken moet je deze registreren in de 'imports' van de component waar je deze directive gebruikt.
Het is ook mogelijk om eenvoudig signals te gebruiken met deze directive.

## 2.54

Als je de FormsModule importeert zal Angular automatisch het standaard form-gedrag afvangen, dus prevent default is niet nodig om bv de submit button anders te gebruiken. In plaats daarvan kan je van de **ngSubmit** directive gebruik maken.
