## react-gainsight

**A simple React component for injecting the Gainsight script.**

This library provides a convenient way to integrate Gainsight analytics into your React applications. By using this component, you can ensure that the Gainsight script is loaded correctly and only once.

### Installation

```bash
npm install react-gainsight
```

## Usage

```js
import GainsightScript from "react-gainsight";

function App() {
  const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";

  return (
    <div>
      <GainsightScript gainsightTagKey={gainsightTagKey} />
      {/* Your app content */}
    </div>
  );
}
```

## Props

| Prop Name       | Type   | Required | Description             |
| --------------- | ------ | -------- | ----------------------- |
| gainsightTagKey | string | Yes      | Your Gainsight tag key. |
