import React, { useEffect } from 'react'
import { Viewer, Cartesian3, UrlTemplateImageryProvider, WebMercatorTilingScheme, ArcGisMapServerImageryProvider } from "cesium"
import './App.css'

const App = ()=> {
  
  const initCesium = ()=> {
    let viewer = new Viewer('cesiumContainer',{
      animation: false,//是否显示动画
      baseLayerPicker: false,//是否显示图层选择按钮
      fullscreenButton: false,//右下角的全屏按钮是否显示
      vrButton: false,//是否显示VR按钮
      geocoder: false,//右上角的搜索按钮是否显示
      homeButton: false,//是否显示有上面的回到首页图标
      infoBox: false,//是否显示属性信息窗口
      sceneModePicker: false,//是否显示二维三维切换按钮
      selectionIndicator: false,//当选中地球的上物体时，是否显示焦点图标
      timeline: false,//是否显示时间线
      navigationHelpButton: false,//是否显示操作帮助按钮
      navigationInstructionsInitiallyVisible: false,//操作帮助按钮是否在加载时就显示出来
      scene3DOnly: true,//如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存
      shouldAnimate: true,//如果时钟默认情况下应尝试提前模拟时间，则为true，否则为false
      imageryProvider: new UrlTemplateImageryProvider({             
        url:'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}',  
        tilingScheme:new WebMercatorTilingScheme(),              
        minimumLevel:1,            
        maximumLevel:20        
      })
      /*imageryProvider: new UrlTemplateImageryProvider({
        url: "http://202.96.98.106:8674/globleMap/lw/google/{z}/{x}/{y}.png",
        credit :"底图"
      },2)*/
    })

    viewer._cesiumWidget._creditContainer.style.display = "none";
    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/guojie/MapServer',
      credit :"国界",
    }),1)

    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/xianzhuangshengjie/MapServer',
      credit :"省界",
    }),1).show = true

    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/xianzhuangxianjie/MapServer',
      credit :"县界",
    }),1).show = false

    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/hupo/MapServer',
      credit :"湖泊",
    }),1).show = false

    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/gonglu/MapServer',
      credit :"公路",
    }),1).show = false

    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/heliu/MapServer',
      credit :"河流",

    }),1).show = false

    viewer.imageryLayers.addImageryProvider(new ArcGisMapServerImageryProvider({
      url: 'http://202.96.98.106:8369/arcgis/rest/services/zrzy/tielu/MapServer',
      credit :"铁路",
    }),1).show = false
    
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/caodi/google/{z}/{x}/{y}.png",
      credit :"草地",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/gengdi/google/{z}/{x}/{y}.png",
      credit:"耕地",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/guanmudi/google/{z}/{x}/{y}.png",
      credit:"灌木地",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/luodi/google/{z}/{x}/{y}.png",
      credit:"裸地",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/renzaodibiao/google/{z}/{x}/{y}.png",
      credit:"人造地表",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/senlin/google/{z}/{x}/{y}.png",
      credit:"森林",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/shidi/google/{z}/{x}/{y}.png",
      credit:"湿地",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/shuiti/google/{z}/{x}/{y}.png",
      credit:"水体",
    }),1).show = false
    viewer.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: "http://202.96.98.106:8674/globleMap/dbfgfc/taiyuan/google/{z}/{x}/{y}.png",
      credit:"苔原",
    }),1).show = false


    let scene = viewer.scene
    scene.skyBox = null

    viewer.camera.flyTo({
      destination: new Cartesian3(
        -3136282.8325650184,
        11828299.339743314,
        4931824.955068227
      ),
      orientation: {
        heading: 6.258816198940535,
        pitch: -1.3631951506241982,
        roll: 6.283092617333153
      }
    })
  }

  useEffect(()=>{
    initCesium()
  },[])

  return (
    <div className="App">
      <div id="cesiumContainer" class="fullSize"></div>
    </div>
  );
}

export default App;