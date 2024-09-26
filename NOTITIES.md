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

```javascript
import { type ... } from './....module';
```

## 2.48

Dynamic CSS met property binding, bijvoorbeeld [class.active]="isSelected". Om voorwaardelijke stijlen toe te passen.

## 2.52

**ngModel** is speciaal voor gebruik in forms, om de input te synchroniseren met de datamodel. Om deze te kunnen gebruiken moet je deze registreren in de 'imports' van de component waar je deze directive gebruikt.
Het is ook mogelijk om eenvoudig signals te gebruiken met deze directive.

## 2.54

Als je de FormsModule importeert zal Angular automatisch het standaard form-gedrag afvangen, dus prevent default is niet nodig om bv de submit button anders te gebruiken. In plaats daarvan kan je van de **ngSubmit** directive gebruik maken.

## 2.56

Als je een component importeert zal die inhoud van die component gebruikt worden in plaats van wat je zelf hebt ingevoerd. bv hier wordt de inhoud overschreven:

```html
<app-card>
    <button [class.active]="isSelected" (click)="onSelectUser()">
        <img
            [src]="imagePath"
            [alt]="user.name"
        />
        <span>{{user.name}}</span>
    </button>
</app-card>
```

Door een speciaal element toe te voegen in de te importeren component wordt de inhoud gecombineerd, bv:

```html
<div>
    <ng-content />
</div>
```

## 2.57

**Piping** gebruiken iets te doen met de output van bv een component, bv:

```html
<time>{{task.dueDate | date:'fullDate' }}</time>
```

## 2.58

Gebruik services  om data te beheren in plaats van in de componenten zelf. Services zijn een klasse die een interface definieert en die gebruikt wordt door de componenten om de data te gebruiken.

## 2.59

Gebruik de constructor van de component-class om services te initialiseren. Alleen zo wordt de service/class eenmalig geinstantieerd voor gebruik in meerdere componenten. Door deze te voorzien van 'private' of 'public' wordt er ook een class property beschikbaar gesteld, die hoeft dus ook niet expliciet gedeclareerd te worden. br:

```typescript
constructor(private tasksService: TasksService) {
```

Om een service/class injecteerbaar te maken moet je de decorator `@Injectable` gebruiken. bv:

```typescript
import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
```

_Dependency Injection_: Declareer de type class die je nodig hebt en ze worden voor je geinstantieerd. Dit hoef je dus niet expliciet te doen.