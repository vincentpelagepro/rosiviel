/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import { horizBarData } from 'src/components/Top/chartsConfigs/horizBarCharts';
import { dougData } from 'src/components/Top/chartsConfigs/dougCharts';
import { lineData } from 'src/components/Top/chartsConfigs/lineCharts';
import { pieData } from 'src/components/Top/chartsConfigs/pieCharts';
import { polarData } from 'src/components/Top/chartsConfigs/polarCharts';


should();

/*
 * Code
 */
describe('Constructeur chartBar des top', () => {
  it('should be a function', () => {
    horizBarData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    horizBarData.should.not.throw();
  });
});

describe('Constructeur Doughnut des top', () => {
  it('should be a function', () => {
    dougData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    dougData.should.not.throw();
  });
});

describe('Constructeur Line des top', () => {
  it('should be a function', () => {
    lineData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    lineData.should.not.throw();
  });
});

describe('Constructeur Pie des topt', () => {
  it('should be a function', () => {
    pieData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    pieData.should.not.throw();
  });
});

describe('Constructeur Polar des top', () => {
  it('should be a function', () => {
    polarData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    polarData.should.not.throw();
  });
});
