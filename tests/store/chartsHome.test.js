/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import { barData } from 'src/components/Home/chartsConfigs/barCharts';
import { dougData } from 'src/components/Home/chartsConfigs/dougCharts';
import { horizBarData } from 'src/components/Home/chartsConfigs/horizBarCharts';
import { pieData } from 'src/components/Home/chartsConfigs/pieCharts';

should();

/*
 * Code
 */


describe('Constructeur Bar de la home', () => {
  it('should be a function', () => {
    barData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    barData.should.not.throw();
  });
});

describe('Constructeur Doughnut de la home', () => {
  it('should be a function', () => {
    dougData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    dougData.should.not.throw();
  });
});

describe('Constructeur HorizBar de la home', () => {
  it('should be a function', () => {
    horizBarData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    horizBarData.should.not.throw();
  });
});

describe('Constructeur Pie de la home', () => {
  it('should be a function', () => {
    pieData.should.to.be.a('function');
  });
  it('do not have to throw', () => {
    pieData.should.not.throw();
  });
});
