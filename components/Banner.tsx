const TypographyAnimation = () => {
    const firstWord = 'developdevelopdevelopdevelop';
    const secondWord = 'design';
  
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
        <span className='relative inline-flex ml-2 overflow-hidden p-2 text-3xl font-semibold'>
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