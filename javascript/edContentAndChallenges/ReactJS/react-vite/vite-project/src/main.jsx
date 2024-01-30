import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExampleClassComponent from './pages/ExampleClassComponent.jsx'
import ExampleFunctionComponent from './pages/ExampleFunctionComponent.jsx'

function SomeExampleHtml(props) {
  return (
    <div>
      <h3>This should be child content within another component</h3>
      {props.children}
    </div>
  )
}

function NestedHtml() {
  return (
    <div>
      <h4>This is a child of a child</h4>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExampleFunctionComponent location="Melbourne">
      <SomeExampleHtml>
        <NestedHtml />
      </SomeExampleHtml>
    </ExampleFunctionComponent>
    <ExampleClassComponent location="Sydney"/>
  </React.StrictMode>
)
