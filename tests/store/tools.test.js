/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import { getTopChart, setColor } from 'src/components/Top/topTools';

import { setBackgroundColor, setTextColor } from 'src/components/Template/SideBarLeft/sideBarTools';


should();

/*
 * Code
 */
describe('Switch pours les charts de Top', () => {
  it('should be a function', () => {
    getTopChart.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    getTopChart.should.not.throw();
  });
});

describe('Switch couleur bouton back homecategory', () => {
  it('should be a function', () => {
    setColor.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    setColor.should.not.throw();
  });
  it('should return a string', () => {
    const setColorTest = setColor('campaigns');
    setColorTest.should.be.a('string');
  });
});

describe('Switch background sidebar left', () => {
  it('should be a function', () => {
    setBackgroundColor.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    setBackgroundColor.should.not.throw();
  });
  it('should return a string', () => {
    const setBackgroundColorTest = setBackgroundColor('campaigns');
    setBackgroundColorTest.should.be.a('string');
  });
});

describe('Switch couleur police sidebar left', () => {
  it('should be a function', () => {
    setTextColor.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    setTextColor.should.not.throw();
  });
  it('should return a string', () => {
    const textColorTest = setTextColor('campaigns');
    textColorTest.should.be.a('string');
  });
});
