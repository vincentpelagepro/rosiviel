/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import fr from 'src/lang';

should();

/*
 * Code
 */
describe('Fichier de langue', () => {
  it('should be an object', () => {
    fr.should.to.be.an('object');
  });
  it('should not be empty', () => {
    fr.should.not.be.empty;
  });
  it('should not be undefined', () => {
    fr.should.not.be.undefined;
  });
  it('should not be undefined', () => {
    fr.should.not.be.null;
  });
});
