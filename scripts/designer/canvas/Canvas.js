/*
 * ��Ŀ˵����Activiti-Designer��Ϊҵ����Ա��������Ա��ϵͳ����Ա��ͼ�λ���ʽ�����Ѻõ���ƹ���������������Ŀ��
 * ��Ȩ���� (C) 2014 ��Ƚ
 * ��һ����������������������������������������GNUͨ�ù������֤�������޸ĺ����·�����һ���򡣻��������֤�ĵڶ��棬���ߣ��������ѡ�����κθ��µİ汾��
 * ������һ�����Ŀ����ϣ�������ã���û���κε���������û���ʺ��ض�Ŀ�ĵ������ĵ���������ϸ����������GNUͨ�ù������֤��
 * ��Ӧ���Ѿ��ͳ���һ���յ�һ��GNUͨ�ù������֤�ĸ����������û�У�
 * д�Ÿ���
 * 	 The Free Software Foundation, Inc., 675 Mass Ave, Cambridge,
 *   MA02139, USA
 * ��ϵ��ʽ��QQ(95724368) ����Ҳ���� E-Mail (jiran1221@163.com)
*/


/**
 * Define WorkSpace's Canvas For ProcessDesigner
 *
 * @author RanJi (����Ҳ����)
 * @date 2014-12-09
 */
org.ranji.activiti.Canvas = draw2d.Canvas.extend({
	canvasName: "org.ranji.activiti.Canvas",

	init: function(id){
		this._super(id);
		this.setScrollArea("#"+id);
		this.id = id;
		
		//-- �����������м����һ������ڵ�ı༭����
		var MyInterceptorPolicy = draw2d.policy.canvas.ConnectionInterceptorPolicy.extend({

			init : function()
			{
				this._super();
			},

			delegateDrop: function(draggedFigure, dropTarget){
				if(draggedFigure instanceof org.ranji.activiti.UserTask && dropTarget instanceof draw2d.Connection){
					return dropTarget;
				}
				return this._super(draggedFigure, dropTarget);
			}

		});
		this.installEditPolicy(new MyInterceptorPolicy());
	}
});