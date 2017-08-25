export class modal{
  visible: boolean = false;
  title: string = '';
  content: string = '操作成功';
  type: string = 'success';
  time: number = null;
  okText: string = '确定';
  cancelText: string = '取消';
  okFunction: Object = function(){ console.log('ok')};
  cancelFunction: Object = function(){ console.log('cancel')};
}
