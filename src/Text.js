const Text = (props) => {

    const texts = props.texts;

    return ( 
        <div className="texts-div">
            {texts.map((texts) => (
                <div className="singular-text">
                    <p>{texts.note}   -   {texts.date}</p>
                </div>
            ))
        }
        </div>
     );
}
 
export default Text;