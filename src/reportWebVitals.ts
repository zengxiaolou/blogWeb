import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      // eslint-disable-next-line promise/always-return
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch(error => {
        // 处理或记录错误
        console.error('Error loading web-vitals', error);
      });
  }
};

export default reportWebVitals;
