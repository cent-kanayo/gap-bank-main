import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, FormFeedback, Modal, ModalBody, ModalHeader, Row, UncontrolledDropdown } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import { ToastContainer } from 'react-toastify';
// import SimpleDonutCharts from './FileManagerCharts';
import DeleteModal from '../../Components/Common/DeleteModal';
//redux
import { useSelector, useDispatch } from 'react-redux';

//import action
import {
    getFolders as onGetFolders,
    updateFolder as onupdateFolder,
    deleteFolder as onDeleteFolder,
    addNewFolder as onAddNewFolder,
    getFiles as onGetFiles,
    updateFile as onupdateFile,
    deleteFile as onDeleteFile,
    addNewFile as onAddNewFile
} from "../../store/actions";

// Formik
import * as  Yup from "yup";
import { useFormik } from "formik";
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';


const Settings = () => {

    document.title="GAP Bank | Settings";

    const dispatch = useDispatch();

    const { folders, files } = useSelector((state) => ({
        folders: state.FileManager.folders,
        files: state.FileManager.files
    }));

    const [deleteModal, setDeleteModal] = useState(false);

    const [deleteAlt, setDeleteAlt] = useState(false);

    // Folders
    const [folder, setFolder] = useState(null);
    const [modalFolder, setModalFolder] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        dispatch(onGetFolders());
    }, [dispatch]);

    useEffect(() => {
        setFolder(folders);
    }, [folders]);

    const folderToggle = useCallback(() => {
        if (modalFolder) {
            setModalFolder(false);
            setFolder(null);
        } else {
            setModalFolder(true);
        }
    }, [modalFolder]);

    // Update Folder
    const handleFolderClick = useCallback((arg) => {
        const folder = arg;

        setFolder({
            id: folder.id,
            folderName: folder.folderName,
            folderFile: folder.folderFile,
            size: folder.size,
        });

        setIsEdit(true);
        folderToggle();
    }, [folderToggle]);

    // Add Folder
    const handleFolderClicks = () => {
        setFolder("");
        setModalFolder(!modalFolder)
        setIsEdit(false);
        folderToggle();
    };

    // Delete Folder
    const onClickFolderDelete = (folder) => {
        setFolder(folder);
        setDeleteModal(true);
    };

    const handleDeleteFolder = () => {

        if (deleteAlt) {
            if (folder) {
                dispatch(onDeleteFolder(folder));
                setDeleteModal(false);
                setDeleteAlt(false)
            }
        } else {
            if (file) {
                dispatch(onDeleteFile(file));
                setDeleteModal(false);
                sidebarClose("file-detail-show")
            }
        }

    };

    // Files
    const [file, setFile] = useState(null);
    const [modalFile, setModalFile] = useState(false);


    const [fileList, setFileList] = useState(files)

    useEffect(() => {
        dispatch(onGetFiles());
    }, [dispatch]);

    useEffect(() => {
        setFile(files);
        setFileList(files)
    }, [files]);

    const fileToggle = useCallback(() => {
        if (modalFile) {
            setModalFile(false);
            setFile(null);
        } else {
            setModalFile(true);
        }
    }, [modalFile]);

    // Update File
    const handleFileClick = useCallback((arg) => {
        const file = arg;

        setFile({
            id: file.id,
            fileName: file.fileName,
            fileItem: file.fileItem,
            size: file.size,
        });

        setIsEdit(true);
        fileToggle();
    }, [fileToggle]);

    // Add File
    const handleFileClicks = () => {
        setFile("");
        setModalFile(!modalFile)
        setIsEdit(false);
        fileToggle();
    };

    // Delete File
    const onClickFileDelete = (file) => {
        setFile(file);
        setDeleteModal(true);
    };


    const [sidebarData, setSidebarData] = useState("");

    const [filterActive, setFilterActive] = useState("");

    const fileCategory = (e, ele) => {
        setFilterActive(ele)
        document.getElementById("folder-list").style.display = "none";
        setFileList(
            files.filter((item) => item.fileType === e)
        );
    };


    // SideBar Open
    function sidebarOpen(value) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.add(value);
    }

    // SideBar Close
    function sidebarClose(value) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.remove(value);
    }

    useEffect(() => {
        sidebarOpen("file-detail-show")
    }, []);

    const favouriteBtn = (ele) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    const fileSidebar = () => {
        document.getElementById("folder-overview").style.display = "none"
        document.getElementById("file-overview").style.display = "block"
    }

    // Folder validation
    const folderValidation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            folderName: (folder && folder.folderName) || '',
            folderFile: (folder && folder.folderFile) || '',
            size: (folder && folder.size) || '',
        },
        validationSchema: Yup.object({
            folderName: Yup.string().required("Please Enter Folder Name"),
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateFolder = {
                    id: folder ? folder.id : 0,
                    folderName: values.folderName,
                    folderFile: values.folderFile,
                    size: values.size
                };
                // save edit Folder
                dispatch(onupdateFolder(updateFolder));
                folderValidation.resetForm();

            } else {
                const newFolder = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    folderName: values["folderName"],
                    folderFile: "0",
                    size: "0"
                };
                // save new Folder
                dispatch(onAddNewFolder(newFolder));
                folderValidation.resetForm();
            }
            folderToggle()
        },
    });


    const dateFormat = () => {
        let d = new Date(),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return ((d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear()).toString());
    };


    // File validation
    const fileValidation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            fileName: (file && file.fileName) || '',
            fileItem: (file && file.fileItem) || '',
            size: (file && file.size) || '',
        },
        validationSchema: Yup.object({
            fileName: Yup.string().required("Please Enter File Name"),
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateFile = {
                    id: file ? file.id : 0,
                    fileName: values.fileName,
                    fileItem: values.fileItem,
                    size: values.size
                };
                // save edit File
                dispatch(onupdateFile(updateFile));
                fileValidation.resetForm();

            } else {
                const newFile = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    fileName: values.fileName + ".txt",
                    fileItem: "0",
                    icon: "ri-file-text-fill",
                    iconClass: "secondary",
                    fileType: "Documents",
                    size: "0 KB",
                    createDate: dateFormat(),
                };
                // save new File
                dispatch(onAddNewFile(newFile));
                fileValidation.resetForm();
            }
            fileToggle();
        },
    });

    const { hash } = useLocation();

    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <DeleteModal
                show={deleteModal}
                onDeleteClick={() => handleDeleteFolder()}
                onCloseClick={() => setDeleteModal(false)}
            />

            <div className="page-content">
                <Container fluid>
                    <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        <div className="file-manager-sidebar">
                            <div className="p-3 d-flex flex-column h-100">
                                <div className="mb-3">
                                    <h5 className="mb-0 fw-semibold">Settings</h5>
                                </div>
                                {/* <div className="search-box">
                                    <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
                                    <i className="ri-search-2-line search-icon"></i>
                                </div> */}
                                <SimpleBar className="mt-3 mx-n4 px-4 file-menu-sidebar-scroll">
                                    <ul className="list-unstyled file-manager-menu">
                                        <li>
                                            <a data-bs-toggle="collapse" href="#bio-data" role="button" aria-expanded="true" aria-controls="bio-data">
                                                <i className="ri-account-box-line align-bottom me-2"></i> <span className="file-list-link fw-normal">Bio Data</span>
                                            </a>
                                            <div className={`collapse ${hash.startsWith('#bio-data') ? 'show' : ''}`} id="bio-data">
                                                <ul className="sub-menu list-unstyled">
                                                    <li>
                                                        <Link to="#bio-data-personal"
                                                            className={hash === "#bio-data-personal" ? "fw-normal" : "fw-normal"}>Personal Information</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#bio-data-kin" className={hash === "#bio-data-kin" ? "fw-normal" : "fw-normal"}>
                                                            Next of Kin Information</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="collapse" href="#account" role="button" aria-expanded="true" aria-controls="account">
                                                <i className="ri-bank-line align-bottom me-2"></i> <span className="file-list-link fw-normal">Account</span>
                                            </a>
                                            <div className={`collapse ${hash.startsWith('#account') ? 'show' : ''}`} id="account">
                                                <ul className="sub-menu list-unstyled">
                                                    <li>
                                                        <Link to="#account-info" className={hash === "#account-info" ? "fw-normal" : "fw-normal"}>
                                                            Account Information</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#account-limits" className={hash === "#account-limits" ? "fw-normal" : "fw-normal"}>
                                                            Transfer Limits</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="collapse"
                                                href="#security" role="button" aria-expanded="true" aria-controls="security">
                                                <i className="ri-shield-keyhole-line align-bottom me-2"></i> <span className="file-list-link fw-normal">Security</span>
                                            </a>
                                            <div className={`collapse ${hash.startsWith('#security') ? 'show' : ''}`} id="security">
                                                <ul className="sub-menu list-unstyled">
                                                    <li>
                                                        <Link to="#security-pin" className={hash === "#security-pin" ? "fw-normal" : "fw-normal"}>
                                                            Reset Transaction PIN</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#security-balance" className={hash === "#security-balance" ? "fw-normal" : "fw-normal"}>
                                                            Show Wallet Balance</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </div>
                        </div>
                        <div className="file-manager-content w-100 p-3 py-0">
                            <SimpleBar className="mx-n3 pt-4 px-4 file-manager-content-scroll">
                                {hash === "#bio-data-personal" && <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Personal Information</h5>
                                    </div>
                                </div>}

                                {hash === "#bio-data-kin" && <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Next of Kin Information</h5>
                                    </div>
                                </div>}

                                {hash === "#account-info" && <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Account Information</h5>
                                    </div>
                                </div>}

                                {hash === "#account-limits" && <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Account Limits</h5>
                                    </div>
                                </div>}

                                {hash === "#security-pin" && <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Transaction PIN</h5>
                                    </div>
                                </div>}

                                {hash === "#security-balance" && <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Wallet Balance</h5>
                                    </div>
                                </div>}
                            </SimpleBar>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Folder Modal */}
            <Modal className="fade zoomIn" isOpen={modalFolder} toggle={() => setModalFolder(!modalFolder)} id="createFolderModal" modalClassName="zoomIn" centered tabIndex="-1">
                <ModalHeader className="p-3 bg-soft-success" id="createFolderModalLabel" toggle={() => setModalFolder(!modalFolder)}> {isEdit ? "Folder Rename" : "Create Folder"} </ModalHeader>
                <ModalBody>
                    <form autoComplete="off" className="needs-validation createfolder-form" id="createfolder-form" noValidate=""
                        onSubmit={(e) => {
                            e.preventDefault();
                            folderValidation.handleSubmit();
                            return false;
                        }}
                    >
                        <div className="mb-4">
                            <label htmlFor="foldername-input" className="form-label">Folder Name</label>
                            <input type="text" className="form-control" id="foldername-input"
                                name='folderName'
                                placeholder="Enter folder name"
                                // validate={{
                                //     required: { value: true },
                                // }}
                                onChange={folderValidation.handleChange}
                                onBlur={folderValidation.handleBlur}
                                value={folderValidation.values.folderName || ""}
                            // invalid={folderValidation.touched.folderName && folderValidation.errors.folderName ? true : false}
                            />
                            {folderValidation.touched.folderName && folderValidation.errors.folderName ? (
                                <FormFeedback type="invalid">{folderValidation.errors.folderName}</FormFeedback>
                            ) : null}

                        </div>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-ghost-success" onClick={() => setModalFolder(false)}><i className="ri-close-line align-bottom"></i> Close</button>
                            <button type="submit" className="btn btn-primary" id="addNewFolder">{isEdit ? "Save" : "Add Folder"}</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>

            {/* File Modal */}
            <Modal id="createFileModal" isOpen={modalFile} toggle={fileToggle} modalClassName="zoomIn" centered tabIndex="-1">
                <ModalHeader toggle={fileToggle} className="p-3 bg-soft-success">{!!isEdit ? "File Rename" : "Create File"}</ModalHeader>
                <ModalBody>
                    <form className="needs-validation createfile-form" id="createfile-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            fileValidation.handleSubmit();
                            return false;
                        }}
                    >
                        <div className="mb-4">
                            <label htmlFor="filename-input" className="form-label">File Name</label>
                            <input type="text" className="form-control" id="filename-input"
                                name="fileName"
                                placeholder="Enter file name"
                                // validate={{
                                //     required: { value: true },
                                // }}
                                onChange={fileValidation.handleChange}
                                onBlur={fileValidation.handleBlur}
                                value={fileValidation.values.fileName || ""}
                            // invalid={fileValidation.touched.fileName && fileValidation.errors.fileName ? true : false}
                            />
                            {fileValidation.touched.fileName && fileValidation.errors.fileName ? (
                                <FormFeedback type="invalid">{fileValidation.errors.fileName}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-ghost-success" onClick={() => setModalFile(false)}><i className="ri-close-line align-bottom"></i> Close</button>
                            <button type="submit" className="btn btn-primary" id="addNewFile">{!!isEdit ? "Save" : "Create"}</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
};

export default Settings;