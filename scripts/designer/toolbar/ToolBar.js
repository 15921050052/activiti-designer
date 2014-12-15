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
 * Define ToolBar For ProcessDesigner
 *
 * @author RanJi (����Ҳ����)
 * @date 2014-12-09
 */
 org.ranji.activiti.ToolBar = Class.extend({
	toolBarName: 'org.ranji.activiti.ToolBar',
	/**
	 * view: ��������Ҫ�����Ļ���
	 */
	init: function(view){
		this.view = view;
		
		this.editMenu = $('#edit-menu');
		this.undoMenuItem = $('#undoButton');
		this.redoMenuItem = $('#redoButton');
		
		view.getCommandStack().addEventListener(this);
		
		this.undoMenuItem.click($.proxy(function(){
			this.view.getCommandStack().undo();
			
		},this));
		this.redoMenuItem.click($.proxy(function(){
			this.view.getCommandStack().redo();
		},this));
		
	},

	stackChanged: function(event){
		 this.disableMenuItem(this.undoMenuItem, !event.getStack().canUndo());
		 this.disableMenuItem(this.redoMenuItem, !event.getStack().canRedo());
	},
	
	disableMenuItem: function(menuItem,flag){
		if(flag){
			this.editMenu.menu('disableItem',menuItem);
		}else{
			this.editMenu.menu('enableItem',menuItem);
		}
	}
 });