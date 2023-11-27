import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    top: 0,
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    zIndex: 9999,
    height: 300,
  },
  closeCircle: { position: 'absolute', left: width * 0.03, top: width * 0.03 },
  close: {
    width: width * 0.08,
    height: width * 0.08,
  },
  scanScreenMessage: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    top: height * 0.12,
    width: 200,
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: width * 0.95,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
  view: { flex: 30 },
  viewSlider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  slider: { width: 300, height: 100 },
  icon: {
    fontSize: 20,
    color: 'red',
  },
});
