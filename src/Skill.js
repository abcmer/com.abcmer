import React from 'react';
import './Skill.css'

const ProSkillIcon = (props) => {
  const isProSkill = props.isProSkill

  if (isProSkill) {
    return(
      <img className='pro-skill' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8DAQQAAAD7+/v4+Pjp6enU1NTe3t7y8vLs7Ozm5ubi4uKHh4fOzs6xsbGamZqTk5O8vLxKSUp1dXVxcXHHx8fBwcE9PD1sbG1hYWGsrKy1tbbY2NgjIiNQT1BLSktAQEEzMjMWFRZ/fn8fHiAsKyyjo6OLi4tXVlcQDxFcW1wvLy8hICJnZmeXl5fvclhyAAALsklEQVR4nN1de1/qPAw+K4iAICB3EFQGCMfD+/0/3rv7ettY2tRG85c/1LUP7ZImTZ78+eNcuvPzYPV+OgTX42m5+nyed92P+Y0yD3cskyDIfzrezo++J4YjnWkGTZLk0+m85Xt+tjL50KHjUa4WvudoI4t/NfBKkNOO74kaSn9/F18O8jj6iZrn3AxfDnL10xaydQEATDEu574nDZHeDoQvA/mDML7CFrDE+P7ke+rNpGMGMME48D35JjI0BhhDDIa+539XHi0AJhhD3wjuSM8OYIxxSds6ftkCjJfx1TeKGpnZA4wh0rUbzxgAY4gT30gqxP4lLCASXcV3JIBk38UtGsAYIkGN2sbaoynEF994VPnEBBhBHPkGJAvuEsb7tOcbkiQhLsAI4l/fkETpIi9hDJGW4/8fOsCA7X2DEgR/CSOIlDxiTFtYIqTkEF+cIAx8wyoF21TkEOnomrkTgAEb+wZWyNgRQjradO0IIfMNrJCDG4QBe/CNLJOWG0UTIaTiJj44Q0jlfvHJEcCAPfuGlsmjM4Qb39Ay+f0If/8udYdw6xtaJn1nCKlcRaGFghWEfd/QMnFl8Rlr+4aWS+AI4dU3sELw4vkiwrVvYIVMf71/OHKEkM4V1MIRQjrXMw9uwjQfvnFx4sRckIom/nWCkM5rGOciOgDIKOUQv7pASCfSFouDF5GdfYPiZeBiDQ9UIm1/0BJpZIiE7i0cxUvp7FNXPj57940sl4krhGTsxcZZFIOKj+8OIZV7bjeqNEZIpf7LkfNEaA3dxbyp2HwH6UIpQDK61Fms7eAbWCFO3ENSsTZXmQp0Ym2usk2oXAHHqsYNQjqxtj8fTuI0lGJtLjxgSq9hXJLnAiGVM1siRwdxmqVvUII4OHwT0qSJoOsa9uYbkiT9X1+NgF2OQLCYFNnRJ5NoUsoQGSEV57cU5MouOo5TKUtUhDPfcDSCWrxGslAW80UkFL/gBfFFJOTd84JSq54hpLhJMT19QmUIoqBtU4IHmlTQtCktz5ATrMQhYjkKvCDFTUkl0oiCE8wgFYGS5Q2F3ISYcy8IxiISi8/IglCnR/gtjMW+yItdfGO4I7Y2kZG5Fa0Uy+wh9ukbwF2xc6JI+vay2ATdGKEC9RqxoDT7AXs0FvPgMOnTDC+meW4E49xVYsblwsgU4zUQo4AGnXTSJmJAdkKqvKKBvEAhspXvKUMF6EgRjR/WCsjh/4kA46rEphjpU89WSFPecvaztCgvzWiTf5QdlKV7n16fsTdCyV33ZXKTLo3u7VQmc1+01zTvLFLprpni/3RvtU0u1tICTpj6GR0Zp51WZL34uNd38og+3UskQu11+ghKGW2lPGc4mOrkPd4UjHH3jlApGMlScaPfUWE1KWVzKDDoyFV75yUT5e9WQwlR1KIydiSFsT3i16jCuvUmn5dT0inoZXWuCFZw1bbRH46o0GL0Q3EP1tnvVqv2gl6oJ46eOqBQ+DR/k98xixOKVDEd6yLPp4Gn8VVVk3gIE5CHsbeFbD0ry2eLUJccF41x8ZLkNp9V9auyYOiqSP+L+0J9827thNpuY9l8zPV8ZapxNNp18G0cg8M6eIE2cbJphlMdW2886OAbQuK9z3p4eoSD2UKxbcNP9WRwh484HvnTbUxVc/zSzEPjHET/dpqeF/1et9vrD7fnaXzEUVf2fiw5+rebu1yU7qyZR6u5hx+yovlh3g1Rd9fbqBqVsZkj52PUYP2SGeiuqXMqqfL0qoseNkscY27CHg/LpoElbVBC5nTTc7E1TY1jbIl+VTxpfqGkvwOUNqA++7D59SrDzkkZQ9r96e3WTThV6+OjgGwVhtsBA1QkWpF3x6e6V/EFgph8MCHC+NiqMgs5U1BVTQGre8fTN0COpMrcySLOX5kzA6zsR+OKPiEhzOv2qzsBQRGecABCOQOry10y16Ha+YAy3bD/MACC+VdrOFeSK7eaTkdghCg3/+BkvBqE8bdVl9cF5uvFuJWDJ1TWZaadWa2ShzMSI9zqwMuZanfOoZZYFp4pbp+NCi+iqO2ZtorW8Fb9655BgoNtOiq8vreO3zh5p2t6VRmQM9jmUZnUwVS/GpnJr06SNcmitlxEEw7kyryRfXGmqbIXJoTEdm32jDLTq7Yp921V6AczYnCrs9vNZMSKcKKglNmHLvxm1hjLJtfIkJVFxwbYklQWO2kW2rBcw4LlxbRfnHqqaSund7ZT5mWa6G/hKJryeai31BqjozoGxl/oP1OAxknpaj66JpFP1Tb/jMczDYWbk8krJlFD0aNkNJiXFBknjZnXvyjqTXOppMQgLL5Qw6pai7pexSRq1kdeZ5suGYbnGpvabNkkauyO7ILYdIk03KY2XIGKSVQWSNlZNrWLZqU2drWEshu8VxBKx0kDx4l/msnJzY4qUDaJSq0Qm4p/YNcjw8jo2zE/saP4NEWZyqp0ZzecgYNhS0oqqUrl9CCpP8v6WhOqEFvqXMkkKjFJ6UW1bVVjYC9siQJlXancH9b+Gj4cPGHTmjJIMolStEAKr1i3TIbTu9n34ZJefkmZSqpUMSbg0cAHN4TKetFLlJSpqEoRGDXAbCEIfVXEV0NSpqJmQGgYBSZ4Q2jDJUa3pZOpqEoR2keAS9+Ad4b6QQWTKGbZCq8NCtnEOwwgSsM/kXRNcPPF+WD0bYOqGpSmHKKXKChT4TyA0z8RSMaA05RDMIliDjevSq2NYfpI2KkGpxueYBIFZSpMB4XVBpq4u0IZVDCJgs3j7/qRml4D/XxwGW/FqLxJFDKGuM9Nw6TyWNWXdjpBol4TogvcSVeIBtt5huUzvyAAWziDiiaRswm8HcHiAoeZC7SuI7xV4Et+uKADWhNT0AUNGlMn73tz8VcudRKvmTAoGoVHQM6ZRC6axulYHGOYPBRiEJHUWyCYxHK1+MOOtWdYDgUxiIi9DrjDVOHmc9dOdmFScSRIIMPsdls/bplcV+gULqUGsZUwyH9CbEPNBU7LCtFSlSIZw+SpkPt8xHE5k1go01KVYjbGAEWFr5gDFzGnIi+vjKlgdvSG5NOi8qtzZ40CYfkJ5kBHHRa9gJNm60cuYkQZz1k5FdTekJBjG26f7fL9yPZkqRLwjGH8WMCxDbmxaGESM2VaGC4kzzAfBpASjd3JITeJ2W1PURGEaAyT5zaP1CC3bCwCp5kyLRx85C67gLaleKfhbOjMJKY6ujiVYneJAiQOYfc2Kkxicq9c2C1MY5gM09y5wG4OW3iJSYArryDA8wzzYZpz9yBrgNJLTB6cq1LsdwFyOYOPMDOJiQrLv2pUY5iM0ryWDc8BLgZP1VxiaLNTKa4xTAZp7iCitoxJB89MYoLQ0UaBMNjitzPMj6LRyTT/EdNDywZp7gLjr2Fuq+KamVSVOmiZCEDooDdsFgOOtmb2tmAbwwD0HiJc4iujpweZyF1KdTq6MQxAutRFs/QUWKRMU1WK6hnmQzSnjXHRLD01idHJNPXi0I1hEEAaYyD7h9n4ife2S1UpYpiUG6F5vz3cPnj5+IlJvKXXfPjGMIDlJ6L2wcsnsIufPE7NMkYyizIAJJro4itOTWJvEG9WN/2DIRQLuMG2fAZlsp4DYwgKRDmbQvF4J18gLFOhhRxCSeeQ+2/onmEAi3gn0n1pyJkEmUTebcyAk/7Okxl7hxNlDqfoGLN7aCBXyv3HGlPytbf7u+RssKkEMcRXm2Ic5ZExP+bWoqdnezI9IqJkbDltzKjV4GmMHacTex7Xp82aoaFEfA5jtw1eX+THzeyL4eG0xsY+Zht86r328Lw6eIWZDn6cnYcOGYa7nU14KRgCvxUZY9dLuOl8D515u7MYhe9X5hhp8fzDSzhavHqghu4+zZ9H4fokkz4iYMretnV4fp73CbDQt546w+15PL0sTwdWKdVIODl8LS/h+LwddigwXWul3e32X4eLyWY0HoRhOF3vl5F8nHaHawHweoxkd/pY7tfT6G8G49HzZD587Xe7+Dvxf00ttCJiHRZmAAAAAElFTkSuQmCC' alt='proSkill'/>
    );
  }
  return null;
}

const LoveSkillIcon = (props) => {
  const isLovedSkill = props.isLovedSkill

  if (isLovedSkill) {
    return(
      <img className='love-skill' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' alt='loveSkill'/>
    );
  }
  return null;
}

const Skill = (props) => {
  const skillName = props.skill.name
  const skillIcon = props.skill.icon
  const isLovedSkill = props.skill.isLovedSkill
  const isProSkill = props.skill.isProSkill

  return(
    <div className="skill">
      <div className="flex-container">
        <img className='skill-icon' src={skillIcon} alt={skillName}/>        
        <h2>{skillName}</h2>  
        <ProSkillIcon isProSkill={isProSkill} />  
        <LoveSkillIcon isLovedSkill={isLovedSkill} />   
      </div>                
    </div>

  );
  
};

export default Skill;
