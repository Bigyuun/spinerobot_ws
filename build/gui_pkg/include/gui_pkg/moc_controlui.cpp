/****************************************************************************
** Meta object code from reading C++ file 'controlui.hpp'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.12.8)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../../src/gui_pkg/include/gui_pkg/controlui.hpp"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'controlui.hpp' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.12.8. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_ControlUI_t {
    QByteArrayData data[13];
    char stringdata0[297];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_ControlUI_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_ControlUI_t qt_meta_stringdata_ControlUI = {
    {
QT_MOC_LITERAL(0, 0, 9), // "ControlUI"
QT_MOC_LITERAL(1, 10, 22), // "on_b_init_ecat_clicked"
QT_MOC_LITERAL(2, 33, 0), // ""
QT_MOC_LITERAL(3, 34, 24), // "on_b_reinit_ecat_clicked"
QT_MOC_LITERAL(4, 59, 25), // "on_b_enable_motor_clicked"
QT_MOC_LITERAL(5, 85, 26), // "on_b_disable_motor_clicked"
QT_MOC_LITERAL(6, 112, 30), // "on_b_enable_cyclic_pos_clicked"
QT_MOC_LITERAL(7, 143, 29), // "on_b_enable_cylic_vel_clicked"
QT_MOC_LITERAL(8, 173, 23), // "on_b_enable_vel_clicked"
QT_MOC_LITERAL(9, 197, 23), // "on_b_enable_pos_clicked"
QT_MOC_LITERAL(10, 221, 29), // "on_b_enter_cyclic_pdo_clicked"
QT_MOC_LITERAL(11, 251, 27), // "on_b_emergency_mode_clicked"
QT_MOC_LITERAL(12, 279, 17) // "on_b_send_clicked"

    },
    "ControlUI\0on_b_init_ecat_clicked\0\0"
    "on_b_reinit_ecat_clicked\0"
    "on_b_enable_motor_clicked\0"
    "on_b_disable_motor_clicked\0"
    "on_b_enable_cyclic_pos_clicked\0"
    "on_b_enable_cylic_vel_clicked\0"
    "on_b_enable_vel_clicked\0on_b_enable_pos_clicked\0"
    "on_b_enter_cyclic_pdo_clicked\0"
    "on_b_emergency_mode_clicked\0"
    "on_b_send_clicked"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_ControlUI[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
      11,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   69,    2, 0x08 /* Private */,
       3,    0,   70,    2, 0x08 /* Private */,
       4,    0,   71,    2, 0x08 /* Private */,
       5,    0,   72,    2, 0x08 /* Private */,
       6,    0,   73,    2, 0x08 /* Private */,
       7,    0,   74,    2, 0x08 /* Private */,
       8,    0,   75,    2, 0x08 /* Private */,
       9,    0,   76,    2, 0x08 /* Private */,
      10,    0,   77,    2, 0x08 /* Private */,
      11,    0,   78,    2, 0x08 /* Private */,
      12,    0,   79,    2, 0x08 /* Private */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void ControlUI::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<ControlUI *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->on_b_init_ecat_clicked(); break;
        case 1: _t->on_b_reinit_ecat_clicked(); break;
        case 2: _t->on_b_enable_motor_clicked(); break;
        case 3: _t->on_b_disable_motor_clicked(); break;
        case 4: _t->on_b_enable_cyclic_pos_clicked(); break;
        case 5: _t->on_b_enable_cylic_vel_clicked(); break;
        case 6: _t->on_b_enable_vel_clicked(); break;
        case 7: _t->on_b_enable_pos_clicked(); break;
        case 8: _t->on_b_enter_cyclic_pdo_clicked(); break;
        case 9: _t->on_b_emergency_mode_clicked(); break;
        case 10: _t->on_b_send_clicked(); break;
        default: ;
        }
    }
    Q_UNUSED(_a);
}

QT_INIT_METAOBJECT const QMetaObject ControlUI::staticMetaObject = { {
    &QMainWindow::staticMetaObject,
    qt_meta_stringdata_ControlUI.data,
    qt_meta_data_ControlUI,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *ControlUI::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *ControlUI::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_ControlUI.stringdata0))
        return static_cast<void*>(this);
    return QMainWindow::qt_metacast(_clname);
}

int ControlUI::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QMainWindow::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 11)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 11;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 11)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 11;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
