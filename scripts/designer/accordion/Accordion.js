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
 * Define Navigation Accordion Menu For ProcessDesigner
 *
 * @author RanJi (����Ҳ����)
 * @date 2014-12-09
 */
org.ranji.activiti.Accordion = Class.extend({
	accordionName: "org.ranji.activiti.Accordion",

	init: function(view){
		this.view = view;
		$('.easyui-accordion .easyui-linkbutton').draggable({
			proxy:function(source){
				var p = $('<div class="draggable-model-proxy"></div>');
				p.html($(source).html()).appendTo('body');
				return p;
			},
			deltaX: -5,
			deltaY: -5,
			revert: true,
			cursor: 'pointer',
			onStartDrag: function(){
				$(this).draggable('options').cursor = "not-allowed";
			},
			onStopDrag: function(){
				$(this).draggable('options').cursor = "pointer";
			}
		});
		
		$('#'+view.id).droppable({
			accept: '.easyui-linkbutton',
			onDragEnter: function(e,source){
				$(source).draggable('options').cursor = 'move';
			},
			onDragLeave: function(e,source){
				$(source).draggable('options').cursor = 'not-allowed';
			},
			onDrop: function(e,source){
				var x = $(source).draggable('proxy').offset().left;
				var y = $(source).draggable('proxy').offset().top;
				console.log("["+x+":"+y+"]");
				

				var shape = new org.ranji.activiti.UserTask();
				//view.add(shape,x,y);
				var command = new draw2d.command.CommandAdd(view,shape,x,y);
				view.getCommandStack().execute(command);
			}
		});
	}
});