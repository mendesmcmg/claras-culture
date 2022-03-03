import './Content.css';

function Content() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Content</h1>
      </div>

      <div className="content-container">
        <p>This might be useful if you want to prevent a large gap from appearing if there is just enough space for the string. Or, where there is another element that you would not want the break to happen immediately after.

In the example below there is a checkbox and label. Let's say, you want the label to break should it be too long for the box. However, you don't want it to break directly after the checkbox.</p>
      </div>
    </div>
  );
}

export default Content;
