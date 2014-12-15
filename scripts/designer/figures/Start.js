/*
 * 项目说明：Activiti-Designer是为业务人员、开发人员及系统管理员用图形化方式方便友好的设计工作流而开发的项目。
 * 版权所有 (C) 2014 纪冉
 * 这一程序是自由软件，你可以遵照自由软件基金会出版的GNU通用公共许可证条款来修改和重新发布这一程序。或者用许可证的第二版，或者（根据你的选择）用任何更新的版本。
 * 发布这一程序的目的是希望它有用，但没有任何担保。甚至没有适合特定目的的隐含的担保。更详细的情况请参阅GNU通用公共许可证。
 * 你应该已经和程序一起收到一份GNU通用公共许可证的副本。如果还没有，
 * 写信给：
 * 	 The Free Software Foundation, Inc., 675 Mass Ave, Cambridge,
 *   MA02139, USA
 * 联系方式：QQ(95724368) 泥鳅也是鱼 E-Mail (jiran1221@163.com)
*/

org.ranji.activiti.Start = draw2d.shape.basic.Circle.extend({
	NAME: "Start",
	init: function(){
		this._super();
		
		this.setStroke(1);
		this.setRadius(15);
		this.setBackgroundColor(new draw2d.util.Color("#ffffff"));
		
		var rightLocator = new draw2d.layout.locator.OutputPortLocator();
		
		this.createPort("output",rightLocator);
		
		//this.getOutputPort(0).setAlpha(0.2);
		
	}
});