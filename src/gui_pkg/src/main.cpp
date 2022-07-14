#include <QApplication>
#include "../include/gui_pkg/main_window.hpp"
#include "../include/gui_pkg/endoscope_viewer.hpp"

int main(int argc, char **argv) {

    QApplication app(argc, argv);
    MainWindow w(argc,argv);
    w.setWindowTitle("Spine Robot Control UI");
    w.show();
    int result = app.exec();
    return result;

}
