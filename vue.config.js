//������Լ��ӵ�
module.exports = {
 // ����·��
//publicPath: './',
 // ����ļ�Ŀ¼
outputDir: 'dist',
assetsDir:'static',//����������outputDir�ģ����Ի������dist/static��

//  ���ô��������ز��Է��ʷ������Ŀ�������
devServer:{
 proxy:{
 '/api/':{
  target:"http://39.96.169.188",//apiӳ���ַ
  secure:false,//https�ӿ�����Ϊture
  changeOrigin:true,//�Ƿ����
  // ws:true,
  pathRewrite:{
   '^/api':''
  }
 },
    }
}
};