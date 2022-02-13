## Drag Drop functionality using Context API & custom hooks



https://user-images.githubusercontent.com/15975603/153740906-22b04fca-2311-4c80-a740-bd0e46e4c9e5.mov


### Overview

- few simple components to achieve drag-drop functionality using Context API & custom hooks
- <h4><a href="https://1743m.csb.app">demo</a></h4>
- it utilizes [HTML5 Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) under the hood

## How components are structured

- to make any item draggable, wrap that inside `<Draggable>`

```jsx
<Draggable>
  <Card id="trek" />
</Draggable>
```

- to make any container a valid drop-target, wrap it inside `<Droppable>`

```jsx
<Droppable>
  <div className="drop-zone"> </div>
</Droppable>
```

### Draggable component

- it attaches drag event handlers to make child item draggable

### Example

```jsx
<Draggable
  key={member.id}
  type={DragDropTypes.CARD} // type of object
  data={member} // custom data object (info about draggable-item)
  onDragStart={(e) => console.log("onDragStart", e)}
  onDragEnd={(e) => console.log("onDragEnd", e)}
>
  <ProfileCard id={member.id} name={member.name} avatar={member.thumb} />
</Draggable>

// NOTE: `type` prop will be used to identify if drop-target accepts this type of items
```

### Droppable component

- it attaches drop handlers on child & makes the child item a valid drop-target

### Example

```jsx
<Droppable
  acceptedTypes={DragDropTypes.CARD} // only these types are accepted
  onDrop={onDrop}
  onDragEnter={onDragEnter}
  onDragLeave={onDragLeave}
  className={cn("droppable", {
    hovering: isHoveringDropzone
  })}
>
  <TeamMembersList teamId="Team-A" members={members} />
</Droppable>
```

## React ContextAPI & custom hooks

- this example is using Context API & custom hooks under the hood
- the related part of your app should be wrapped inside `DragDropProvider`

```jsx
<DragAndDropProvider>
  <App />
</DragAndDropProvider>
```
