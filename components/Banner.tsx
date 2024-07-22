const TypographyAnimation = () => {
    const firstWord = 'Wealth. Fame. Power. The man who had everything in this world... The Pirate King, Gold Roger';
    const secondWord = ' The Great Age of Pirates! Words he spoke drove countless men out to sea. And so men set sights on the Grand Line, in pursuit of their dreams. The world has truly entered a Great Pirate Era!';
  
    const renderWordAnimation = (word: string, startingDelay: number) => {
    //const delay = ['0ms','50ms','100ms','150ms','200ms','250ms','300ms'];
    const bar = word.split('').map((_,index)=> ""+(startingDelay+index*50)+"ms");
      return word.split('').map((letter, index) => (
        console.log(startingDelay+ index*50),
        console.log(bar[index]),
        <span
          key={index}
          className={`animate-fall  translate-y-[-150%]`}
          style={{animationDelay: bar[index]}}
        >
          {letter}
        </span>
      ));
    };
  
    return (
        <span className='relative inline-flex ml-2 overflow-hidden p-2 text-3xl font-semibold mt-2'>
          <div className='flex flex-row'>
            {renderWordAnimation(firstWord, 0)}
          </div>
    
          <span className='absolute top-0 bottom-0'>
            <div className='flex flex-row'>
              {renderWordAnimation(secondWord, 1500)}
            </div>
          </span>
        </span>
      );
  };

export default TypographyAnimation