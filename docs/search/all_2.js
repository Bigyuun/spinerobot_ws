var searchData=
[
  ['callactivestateui_0',['CallActiveStateUI',['../classMainWindow.html#a489cb62ba348e0689f6d0d49b65b2a0b',1,'MainWindow']]],
  ['callinactivestateui_1',['CallInactiveStateUI',['../classMainWindow.html#afb2eb25211ad30dd58dcc1f1c96e82be',1,'MainWindow']]],
  ['callunconfiguredstateui_2',['CallUnconfiguredStateUI',['../classMainWindow.html#a263819c4964451f170471ab5b0f7769c',1,'MainWindow']]],
  ['cam_5fid_3',['cam_id',['../classVideoCapture.html#a112ef5073674467b47adc3f97704cb32',1,'VideoCapture']]],
  ['change_5fstate_4',['change_state',['../classSafetyNode.html#ad5a78fd32388d7ee72f8567d7e157adc',1,'SafetyNode']]],
  ['checkmasterdomainstate_5',['CheckMasterDomainState',['../classEthercatCommunication_1_1EthercatNode.html#af76be6b843886442b2d4d7b94be9374f',1,'EthercatCommunication::EthercatNode']]],
  ['checkmasterstate_6',['CheckMasterState',['../classEthercatCommunication_1_1EthercatNode.html#af64a25729064c533ee955e0b461ddcca',1,'EthercatCommunication::EthercatNode']]],
  ['checkslaveconfigstate_7',['CheckSlaveConfigState',['../classEthercatSlave.html#a2a0e089503f81440185e983401d1bbba',1,'EthercatSlave']]],
  ['checkslaveconfigurationstate_8',['CheckSlaveConfigurationState',['../classEthercatCommunication_1_1EthercatNode.html#a78c55e7bee137dcee3fb65d2954171fb',1,'EthercatCommunication::EthercatNode']]],
  ['cia402errortype_9',['CiA402ErrorType',['../gui__globals_8hpp.html#afeaa6acaf321700c18979784e52e5352',1,'gui_globals.hpp']]],
  ['client_5fchange_5fstate_5f_10',['client_change_state_',['../classSafetyNode.html#a8bfafeed901f7601e58959c89c5ddbef',1,'SafetyNode']]],
  ['client_5fget_5fstate_5f_11',['client_get_state_',['../classSafetyNode.html#ac84b90290107bf6cbceef3fb5f3368eb',1,'SafetyNode']]],
  ['clock_5fto_5fuse_12',['CLOCK_TO_USE',['../ecat__definitions_8hpp.html#a5a01bd1cd59441f2db054ad38728de54',1,'ecat_definitions.hpp']]],
  ['cmake_5fminimum_5frequired_13',['cmake_minimum_required',['../ecat__msgs_2CMakeLists_8txt.html#a0dc9d1dbd6c0b50b14671a70c25ce475',1,'cmake_minimum_required(VERSION 3.5) project(ecat_msgs) if(NOT CMAKE_C_STANDARD) set(CMAKE_C_STANDARD 99) endif() if(NOT CMAKE_CXX_STANDARD) set(CMAKE_CXX_STANDARD 14) endif() if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES &quot;Clang&quot;) add_compile_options(-Wall -Wextra -Wpedantic) endif() find_package(ament_cmake REQUIRED) find_package(std_msgs REQUIRED) find_package(builtin_interfaces REQUIRED) find_package(rosidl_default_generators REQUIRED) set(msg_files &quot;msg/DataReceived.msg&quot; &quot;msg/DataSent.msg&quot; &quot;msg/GuiButtonData.msg&quot; &quot;msg/HapticCmd.msg&quot;) rosidl_generate_interfaces($:&#160;CMakeLists.txt'],['../controller_2CMakeLists_8txt.html#ad1bf69fd353850593e105f63289c8339',1,'cmake_minimum_required(VERSION 3.5) project(controller) if(NOT CMAKE_CXX_STANDARD) set(CMAKE_CXX_STANDARD 14) endif() if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES &quot;Clang&quot;) add_compile_options(-Wall -Wextra -Wpedantic) endif() find_package(ament_cmake REQUIRED) find_package(rclcpp REQUIRED) find_package(sensor_msgs REQUIRED) find_package(rttest) find_package(tlsf_cpp) if($:&#160;CMakeLists.txt'],['../ecat__pkg_2CMakeLists_8txt.html#a0d121d952cf7d7860ef1e3398431acd6',1,'cmake_minimum_required(VERSION 3.5) project(ecat_pkg) if(NOT CMAKE_C_STANDARD) set(CMAKE_C_STANDARD 99) endif() if(NOT CMAKE_CXX_STANDARD) set(CMAKE_CXX_STANDARD 14) endif() add_compile_options(-g -w -Wall -Wextra -Wpedantic -I/opt/etherlab/include -L/opt/etherlab/lib -lethercat -lpthread -lrt -Wl:&#160;CMakeLists.txt'],['../gui__pkg_2CMakeLists_8txt.html#ae63cc5854ecdd1c87eb8ce252bc11a46',1,'cmake_minimum_required(VERSION 3.5) project(gui_pkg) if(NOT CMAKE_C_STANDARD) set(CMAKE_C_STANDARD 99) endif() if(NOT CMAKE_CXX_STANDARD) set(CMAKE_CXX_STANDARD 14) endif() if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES &quot;Clang&quot;) add_compile_options(-Wall -Wextra -Wpedantic) endif() find_package(Qt5 COMPONENTS Core Gui Widgets REQUIRED) find_package(ament_cmake REQUIRED) find_package(rclcpp REQUIRED) find_package(ecat_msgs REQUIRED) find_package(sensor_msgs REQUIRED) find_package(std_msgs REQUIRED) find_package(cv_bridge REQUIRED) set(CMAKE_INCLUDE_CURRENT_DIR ON) file(GLOB UIS RELATIVE $:&#160;CMakeLists.txt'],['../input__pkg_2CMakeLists_8txt.html#a97600d4bbf09916b9863e6b35fc77241',1,'cmake_minimum_required(VERSION 3.5) project(input_pkg) if(NOT CMAKE_C_STANDARD) set(CMAKE_C_STANDARD 99) endif() if(NOT CMAKE_CXX_STANDARD) set(CMAKE_CXX_STANDARD 14) endif() if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES &quot;Clang&quot;) add_compile_options(-Wall -Wextra -Wpedantic) endif() find_package(ament_cmake REQUIRED) find_package(rclcpp REQUIRED) find_package(std_msgs REQUIRED) find_package(sensor_msgs REQUIRED) find_package(ecat_msgs REQUIRED) include_directories(&quot;include/input_pkg/&quot;) add_executable(hapticNode src/hapticNode.cpp) ament_target_dependencies(hapticNode rclcpp std_msgs sensor_msgs ecat_msgs) install(TARGETS hapticNode DESTINATION lib/$:&#160;CMakeLists.txt']]],
  ['cmakelists_2etxt_14',['CMakeLists.txt',['../input__pkg_2CMakeLists_8txt.html',1,'(Global Namespace)'],['../gui__pkg_2CMakeLists_8txt.html',1,'(Global Namespace)'],['../controller_2CMakeLists_8txt.html',1,'(Global Namespace)'],['../ecat__msgs_2CMakeLists_8txt.html',1,'(Global Namespace)'],['../ecat__pkg_2CMakeLists_8txt.html',1,'(Global Namespace)'],['../safety__pkg_2CMakeLists_8txt.html',1,'(Global Namespace)']]],
  ['coalesce_5finterval_5f_15',['coalesce_interval_',['../classController.html#a4f675391f5742ab81426d704ce3e033f',1,'Controller']]],
  ['com_5fstatus_16',['com_status',['../structSdoRequest.html#abcf34d501299d1cc084a7a8518a21073',1,'SdoRequest::com_status()'],['../structReceivedData.html#a3afcc288ec8cf840cc34b4426c42a54f',1,'ReceivedData::com_status()']]],
  ['comm_5fthread_5f_17',['comm_thread_',['../classHapticNode.html#a684ca1834830027f30a05b9809af1551',1,'HapticNode']]],
  ['command_5f_18',['command_',['../classEthercatLifeCycleNode_1_1EthercatLifeCycle.html#a8852f433f1e6d0927892fab6f88e01d1',1,'EthercatLifeCycleNode::EthercatLifeCycle']]],
  ['commthread_19',['commThread',['../classHapticNode.html#a468dc1c2e491c3f8a6013ae641e77832',1,'HapticNode']]],
  ['configdcsync_20',['ConfigDcSync',['../classEthercatCommunication_1_1EthercatNode.html#a5bb6c912a9fe73dc73a6cf216177e886',1,'EthercatCommunication::EthercatNode']]],
  ['configdcsyncdefault_21',['ConfigDcSyncDefault',['../classEthercatCommunication_1_1EthercatNode.html#a57ca95ffa0562dc7c34705a0514d6ea2',1,'EthercatCommunication::EthercatNode']]],
  ['configuremaster_22',['ConfigureMaster',['../classEthercatCommunication_1_1EthercatNode.html#a44858407cdf70da448d663df9af054f1',1,'EthercatCommunication::EthercatNode']]],
  ['configureslaves_23',['ConfigureSlaves',['../classEthercatCommunication_1_1EthercatNode.html#a473246ebddb4b4d9c4e72434a563f0e2',1,'EthercatCommunication::EthercatNode']]],
  ['control_5fword_24',['control_word',['../structSdoRequest.html#a8a0ff046a33729998cae1abf15e65a32',1,'SdoRequest::control_word()'],['../structReceivedData.html#a1699392bb03d114ab5a0c7e9250c8d32',1,'ReceivedData::control_word()'],['../structOffsetPDO.html#a8c4f5d0811f5157ddd5b2aad718ca216',1,'OffsetPDO::control_word()']]],
  ['controller_25',['Controller',['../classController.html#a95c56822d667e94b031451729ce069a9',1,'Controller::Controller()'],['../classController.html',1,'Controller']]],
  ['controller_5f_26',['controller_',['../classEthercatLifeCycleNode_1_1EthercatLifeCycle.html#a2b55e301403a0e5eaf17f2ee898d0f6e',1,'EthercatLifeCycleNode::EthercatLifeCycle::controller_()'],['../classSafetyNode.html#a9c249f357feffc4c6fc5ff2ad7826a3b',1,'SafetyNode::controller_()']]],
  ['controller_5fcommands_5f_27',['controller_commands_',['../classGUI_1_1GuiNode.html#a0d8c7deb8ea9697735e630aa83f02f81',1,'GUI::GuiNode']]],
  ['controller_5fgain_5ferror_28',['CONTROLLER_GAIN_ERROR',['../gui__globals_8hpp.html#afeaa6acaf321700c18979784e52e5352aa84bf76ec8d7e71c18ed9251715223c8',1,'CONTROLLER_GAIN_ERROR():&#160;gui_globals.hpp'],['../ecat__definitions_8hpp.html#ab0df38968e4f03a3f1f6d6df0f31f45aaa84bf76ec8d7e71c18ed9251715223c8',1,'CONTROLLER_GAIN_ERROR():&#160;ecat_definitions.hpp']]],
  ['controlstructurebits_29',['ControlStructureBits',['../ecat__definitions_8hpp.html#ae56d58acf7f23ca7ce23ed016a45dcae',1,'ecat_definitions.hpp']]],
  ['controlui_30',['ControlUI',['../classControlUI.html',1,'ControlUI'],['../classControlUI.html#ab848a6aae0d9a53ed40c73b31057e512',1,'ControlUI::ControlUI()']]],
  ['controlui_2ecpp_31',['controlui.cpp',['../controlui_8cpp.html',1,'']]],
  ['controlui_2ehpp_32',['controlui.hpp',['../controlui_8hpp.html',1,'']]],
  ['controluibuttondata_33',['ControlUIButtonData',['../structControlUIButtonData.html',1,'']]],
  ['counter_5f_34',['counter_',['../classTiming.html#a5eb0575d415b5646a81c802b87fe67c6',1,'Timing']]],
  ['cspositionmodeparam_35',['CSPositionModeParam',['../structCSPositionModeParam.html',1,'']]],
  ['cstorquemodeparam_36',['CSTorqueModeParam',['../structCSTorqueModeParam.html',1,'']]],
  ['csvelocitymodeparam_37',['CSVelocityModeParam',['../structCSVelocityModeParam.html',1,'']]],
  ['curr_5fthreshold_5fhoming_38',['curr_threshold_homing',['../structHomingParam.html#aa882eb093eb65f7d30976fbb1c761dc2',1,'HomingParam']]],
  ['current_5fcontroller_5fgain_39',['current_controller_gain',['../structCSPositionModeParam.html#a7ce4438d79c906eff81308e7d6a54e82',1,'CSPositionModeParam']]],
  ['current_5flifecycle_5fstate_40',['current_lifecycle_state',['../structReceivedData.html#acdb3787a6b0dc60745069f93d3b2c5ec',1,'ReceivedData::current_lifecycle_state()'],['../classGUI_1_1GuiNode.html#a6987206057a2586f5fa17ed6206b5703',1,'GUI::GuiNode::current_lifecycle_state()']]],
  ['custom_5fslave_41',['CUSTOM_SLAVE',['../ecat__globals_8hpp.html#a1ef60d5687ea9337b2e3e040be43db07',1,'ecat_globals.hpp']]],
  ['cvmattoqimage_42',['cvMatToQImage',['../classVideoCapture.html#a97fc96e7b4aca0ee7cd2256ae4174d83',1,'VideoCapture']]],
  ['cvmattoqpixmap_43',['cvMatToQPixmap',['../classVideoCapture.html#a3e439afbb57883262644b4853251f862',1,'VideoCapture']]]
];