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