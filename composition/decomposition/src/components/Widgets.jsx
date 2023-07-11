import Widget from './Widget';

function Widgets() {
  return (
    <div className='widgets'>
      <Widget title='widget-title'>
        <div className='widget-block'>Widget-Content-01</div>
      </Widget>
      <Widget title='widget-title'>
        <div className='widget-block'>Widget-Content-02</div>
      </Widget>
      <Widget title='widget-title'>
        <div className='widget-block'>Widget-Content-03</div>
      </Widget>
    </div>
  );
}

export default Widgets;